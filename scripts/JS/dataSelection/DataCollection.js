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

                if (key === 'pathogen_checkbox' || key === 'data_type_checkbox' || key === 'data_class_checkbox') {
                    if (!value.map(elem => elem.replace(/ /g,'')).some(elem => elementValue.includes(elem))) {
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
            case 'data_many':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.dataTypes.length < b.dataTypes.length ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'data_low':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.dataTypes.length > b.dataTypes.length ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'date_old':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.fullDate > b.fullDate ? 1 : -1)).map(item => item.object);
                return this.selectedElements;
            case 'date_new':
                this.selectedElements = arrayOfObjects.sort((a, b) => (a.fullDate < b.fullDate ? 1 : -1)).map(item => item.object);
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