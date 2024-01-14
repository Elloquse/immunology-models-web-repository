function changeModebar () {
    
    let iframe = document.getElementById('new_plot').contentWindow.document
    iframe.querySelector('.modebar').style.position = 'absolute';
    iframe.querySelector('.modebar').style.top = '43px'
    // iframe.querySelector('.modebar').style.right = '10%'
}

document.getElementById("new_plot").addEventListener("load", changeModebar);