class CheckboxesCollection {
    constructor() {
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    changeBoxState(boxValue) {
        this.elements.forEach(element => {
            if (element.value === boxValue) {
                element.state = element.html.checked;
            }
        })
    }

    uncheckBoxes(boxValue) {
        let dateBoxes = this.elements.filter(element => element.class === 'date_checkbox');
        return dateBoxes.filter(element => element.html.checked === true && element.value !== boxValue);
    }

    getActiveBoxes() {
        let activeBoxes = new Map();
        this.elements.forEach(element => {
            if (element.state === true) {
                if (activeBoxes.has(element.class)) {
                    activeBoxes.get(element.class).push(element.value);
                } else {
                    activeBoxes.set(element.class, [element.value]);
                }
            }
        })     
        return activeBoxes; // return a dictionary with checkboxes' classes in keys and selected options of each class in [values]
    }

    getBoxes() {
        return this.elements;
    }
}
