class VisibleElements {
    constructor(element) {
        this.html = element;
        this.class = element.className;
        this.id = element.id;
        this.value = element.value;
        if (parseInt(element.value) === 10){
            this.state = true;
        } else {
            this.state = false;
        }  
    }
}

class VisibleElementsCollection {
    constructor() {
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    getActiveButton() {
        let activeButtonValue = 0;
        this.elements.forEach(elem => {
            if (elem.state === true) {
                activeButtonValue = parseInt(elem.value);
            }
        })
        return activeButtonValue;
    } 

    changeActiveButton(selectedButton) {
        
        this.elements.forEach(element => {
            if (parseInt(selectedButton.value) === parseInt(element.value)) {
                element.state = true;
                element.html.classList.add('active_pages');
            } else {
                element.state = false;
                element.html.classList.remove('active_pages');
            }
        })
    }
}

// take all buttons from DOM
function getButtons() {
    return document.querySelectorAll('.visiblePages');
}

// declare a var with these buttons
const allButtons = getButtons();

// create object for each button and put it in a class array
const visibleElements = new VisibleElementsCollection;
allButtons.forEach(element => {
    visibleElements.add(new VisibleElements(element))   
});

function changeVisibleElementsNumber(value) {
    let currentElements = elementsCollection.getVisibleElements();
    elementsContainer.replaceChildren(...currentElements.slice(0, value))
    element(pageNumber(), 1)
    visiblePageNumber();
    sortValues();
}

function visiblePageNumber() {
    let pageNumber = document.querySelectorAll(".exp_data").length;
    document.getElementById("visibleElems").innerHTML = pageNumber;
    document.getElementById("allFilteredElements").innerHTML = elementsCollection.getElementsNumber();
}


