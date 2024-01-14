const selectTag = document.querySelector("#sort_type");

const sortValues = () => {
    const selectedOption = document.querySelector("#sort_type").value;
    let currentMaxElements = [], sortedElements = [];

    switch (selectedOption) {
        case 'pathogen_a_z' :

            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('pathogen_a_z');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;

        case 'pathogen_z_a' :

            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('pathogen_z_a');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;

        case 'data_many' :

            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('data_many');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;
       
        case 'data_low' :
                
            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('data_low');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;
            
        case 'date_old' :

            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('date_old');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;
        
        case 'date_new' :

            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('date_new');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;
        
        case 'all_models' :

            currentMaxElements = visibleElements.getActiveButton();
            sortedElements = elementsCollection.sortByName('all_models');
            elementsContainer.replaceChildren(...sortedElements.slice(0, currentMaxElements));
            element(pageNumber(), 1);
            visiblePageNumber();
            break;
    }
}

selectTag.addEventListener('change', sortValues);


