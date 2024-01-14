function getElements() {
    return document.querySelectorAll(".exp_data");
}

function getCheckBoxes() {
    return document.querySelectorAll('input[type=checkbox]');
}

const allElementsArray = getElements();
const allCheckboxesArray = getCheckBoxes();

// create two classes for store elements and checkboxes
const elementsCollection = new DataCollection;
const checkboxesCollection = new CheckboxesCollection;

// create container for elements on the page
const elementsContainer = document.querySelector(".center_cell_3");

// create objects for each data element and store it in a class
allElementsArray.forEach(elem => {
    elementsCollection.add(new Data(elem));
})

// create objects for each checkbox and store it in a class
allCheckboxesArray.forEach(elem => {
    checkboxesCollection.add(new Checkbox(elem));
})

const inputDate = [new DateInput(document.querySelector('#date_input_prev')), new DateInput(document.querySelector('#date_input_next'))]
