class DataCollection {
    constructor() {
        this.elements = [];
        this.selectedElements = [];
    }


    add(element) {
        this.elements.push(element);
        this.selectedElements.push(element.object);
    }

    filter(boxesMap, inputDate) {
        
        let filteredElements = [];
        this.elements.forEach(element => {
            let addCondition = true;

            for (let [key, value] of boxesMap) {
                let elementValue = element.map.get(key);
                if (key === 'pathogen_checkbox' || key === 'model_type_checkbox') {
                    if (!value.some(elem => elementValue.includes(elem))) {
                        addCondition = false;
                    }
                } else if (key === 'date_checkbox') {
                    if (elementValue < value) {
                        addCondition = false;
                    }
                }
            }
            
            if (inputDate.length === 2) {
                if (!(element.date >= inputDate[0]) || !(element.date <= inputDate[1])) {
                    addCondition = false;
                }               
            }

            if (addCondition === true) {
                filteredElements.push(element.object);
            }
        })
        this.selectedElements = filteredElements;
        return filteredElements;
    }

    search(elementsAfterFiltration) {

        let arrayOfObjects = [];
        elementsAfterFiltration.forEach(element => {
            this.elements.forEach(item => {
                if (element === item.object) {
                    arrayOfObjects.push(item);
                }
            })
        })

        const searchCurrentValue = document.querySelector('#model_search').value;

        const filterByAuthor = function (elem) {
            let authorsOnlyLastName = elem.authors.replaceAll(/(\s.[.])/g, '');
            return authorsOnlyLastName.includes(searchCurrentValue)
        }

        let searchResults = arrayOfObjects.filter(filterByAuthor).map(item => item.object);

        this.selectedElements = searchResults;
        return searchResults;
    }

    getElementsNumber() {
        return this.selectedElements.length;
    }

    getVisibleElements() {
        return this.selectedElements;
    }

    newPage(elementsIndex, currentMaxElements) {
        let newElementsArray = this.selectedElements.slice(elementsIndex, elementsIndex + currentMaxElements);
        return newElementsArray;
    }

    sortByName(operator) {
        let arrayOfObjects = [];
        this.selectedElements.forEach(element => {
            this.elements.forEach(item => {
                if (element === item.object) {
                    arrayOfObjects.push(item);
                }
            })
        })

        switch (operator) {
            case 'pathogen_a_z':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.pathogen.toLowerCase() > b.pathogen.toLowerCase() ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'pathogen_z_a':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.pathogen.toLowerCase() < b.pathogen.toLowerCase() ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'date_old':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.fullDate > b.fullDate ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'date_new':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.fullDate < b.fullDate ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'compartments_many':
                this.selectedElements = arrayOfObjects.sort((a, b) => (b.compartments - a.compartments)).map(item => item.object);
                return this.selectedElements;
            case 'compartments_low':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.compartments - b.compartments)).map(item => item.object);
                return this.selectedElements;
            case 'species_many':
                this.selectedElements = arrayOfObjects.sort((a, b) => (b.species - a.species)).map(item => item.object);
                return this.selectedElements;
            case 'species_low':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.species - b.species)).map(item => item.object);
                return this.selectedElements;
            case 'all_models':
                let notSortedArray = [];
                this.elements.forEach(element => {
                    this.selectedElements.forEach(item => {
                        if (element.object === item) {
                            notSortedArray.push(item);
                        }
                    })
                })
                this.selectedElements = notSortedArray;
                return this.selectedElements;
        }   
    }

}