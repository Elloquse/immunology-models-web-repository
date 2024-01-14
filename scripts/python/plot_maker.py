""" 
Input:
-document -- {path_to_file_with_data : name_of_data} -- dict
-title -- title of a plot -- str
-x-axis_title -- name of x axis -- str
-y-axis_title -- name of y axis -- str
-x_units -- units of measure of x axis -- str
-y_units -- units of measure of y axis -- str
-html_name -- if given create html_name.html file with a plot in current directory -- str
"""

def plot_maker(document, title:str=None, x_axis_title:str="Время", y_axis_title:str="y", x_units:str="дни", y_units:str="единиц/мл", html_name:str=False):

    import plotly.graph_objects as go
    import plotly.colors as plc
    import pandas as pd
    

    color_scheme = ["#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"]

    fig = go.Figure()

    for index, i_key in enumerate(document):

        if i_key.endswith('.txt'):

            file = pd.read_csv(i_key, sep="\t")
            dev_color = plc.hex_to_rgb(color_scheme[index])
            dev_color = dev_color + (0.12,)
            dev_color = f'rgba{dev_color}'

            try:
                time = file.iloc[:,0].tolist()
                data = file.iloc[:,1].tolist()
                lower = file.iloc[:,2].tolist()
                upper = file.iloc[:,3].tolist()

            except IndexError:
                fig.add_trace(go.Scatter(
                            x=time, 
                            y=data, 
                            name=document[i_key],
                            line=dict(color=color_scheme[index], width=2.5),
                            mode="markers+lines"
                            )
                         )
                continue
    
            
            fig.add_trace(go.Scatter(
                            x=time, 
                            y=data, 
                            name=document[i_key],
                            line=dict(color=color_scheme[index], width=2.5),
                            mode="markers+lines"
                            )
                         )

            fig.add_trace(go.Scatter(
                            name='Upper Bound', 
                            x=time, 
                            y=upper,
                            mode='lines', 
                            line=dict(width=0), 
                            showlegend=False
                            )
                        )

            fig.add_trace(go.Scatter(
                            name='Lower Bound', 
                            x=time, 
                            y=lower,
                            line=dict(width=0), 
                            mode='lines', 
                            fillcolor=dev_color, 
                            fill='tonexty',
                            showlegend=False
                            )
                        )

    fig.update_layout(title=title,
                        title_x=0.5, 
                        title_y=0.965,
                        title_font = {"size": 20}, 
                        xaxis_title=x_axis_title + ', ' + x_units,
                        yaxis_title=y_axis_title + ', ' + y_units, 
                        template="plotly_white",
                        hovermode="closest", 
                        hoverlabel=dict(bgcolor="white", font_size=14),
                        margin=dict(l=10, r=10, t=70, b=10),
                        legend=dict(
                            orientation="h",
                            yanchor="bottom",
                            y=1,
                            xanchor="left",
                            x=0
                        )
                    )   

    hovertemp = f"<b>{x_axis_title}, {x_units}:" + "</b> %{x} <br>"
    hovertemp += f"<b>{y_axis_title}, {y_units}:" + "</b> %{y}<extra></extra>" 

    fig.update_traces(hovertemplate=hovertemp)

    fig.update_xaxes(
        tickangle = 0,
        title_font = {"size": 17, "family":'Roboto'},
        title_standoff = 18,
        tickfont=dict(size=13, family='Roboto'),
        showspikes=True
        )

    fig.update_yaxes(
        tickangle = 0,
        title_font = {"size": 17, "family":'Roboto'},
        title_standoff = 10,
        tickfont=dict(size=13, family='Roboto'),
        showspikes=True
        )

    if html_name != False:
        fig.write_html(f"{html_name}.html", include_plotlyjs='cdn')

    return fig
