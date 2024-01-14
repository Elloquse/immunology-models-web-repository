// Initiated variables:
// const elementsCollection = new DataCollection;
// const checkboxesCollection = new CheckboxesCollection;
// const allElementsArray = getElements();
// const allCheckboxesArray = getCheckBoxes();
// const elementsContainer = document.querySelector(".center_cell_3");

function changeBoxState () {
    checkboxesCollection.changeBoxState(this.value);
}

function filterElements(inputDate, sliceRange=10) {
    let activeBoxes = checkboxesCollection.getActiveBoxes();
    let filteredElementsArray = elementsCollection.filter(activeBoxes, inputDate);
    elementsContainer.replaceChildren(...filteredElementsArray.slice(0,sliceRange))
    sortValues();
    element(pageNumber(), 1)
    visiblePageNumber();
}

function removeSelection() {
    let clickEvent = new Event ('click');
    let dateCheckboxes = checkboxesCollection.uncheckBoxes(this.value);
    dateCheckboxes.forEach(element => {
        element.html.checked = false;
        element.html.dispatchEvent(clickEvent)
    })
}

function dateInputClick(event) {
    if (event.key === 'Enter' || event.type === 'focusout') {
        if (this.value > 2023) {
            this.value = 2023;
        } else if (this.value < 1920) {
            this.value = 1920;
        }
        
        let prevVal = document.getElementById('date_input_prev').value;
        let nextVal = document.getElementById('date_input_next').value;

        if (this.id === 'date_input_prev') {
            if (this.value > nextVal) {
                this.value = nextVal;
            }
        } else if (this.id === 'date_input_next') {
            if (this.value < prevVal) {
                this.value = prevVal;
            }
        }
        prevVal = document.getElementById('date_input_prev').value;
        nextVal = document.getElementById('date_input_next').value;

        let clickEvent = new Event ('click');
        let dateCheckboxes = checkboxesCollection.uncheckBoxes('');
        dateCheckboxes.forEach(element => {
            element.html.checked = false;
            element.html.dispatchEvent(clickEvent)
        })

        let currentMaxElements = visibleElements.getActiveButton();
        filterElements([parseInt(prevVal), parseInt(nextVal)], currentMaxElements);
    }
}

function setDefaultRange() {
    document.getElementById('date_input_prev').value = 1920;
    document.getElementById('date_input_next').value = 2023;
}

function returnAllDate() {
    if (checkboxesCollection.uncheckBoxes().length === 0) {
        document.getElementById('all_date').click();
    }
}

allCheckboxesArray.forEach(element => {
    
    element.addEventListener('click', changeBoxState);
    element.addEventListener('click', filterElements);   
})


allCheckboxesArray.forEach(element => {
    if (element.className === 'date_checkbox') {
        element.addEventListener('change', removeSelection);
        element.addEventListener('change', setDefaultRange);
        element.addEventListener('change', returnAllDate);
    }
}) 

inputDate[0].html.addEventListener("keypress", dateInputClick);
inputDate[1].html.addEventListener("keypress", dateInputClick);
inputDate[0].html.addEventListener("focusout", dateInputClick);
inputDate[1].html.addEventListener("focusout", dateInputClick);

