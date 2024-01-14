class Data {

    constructor(elementObject){
        this.object = elementObject;
        this.html = elementObject.innerHTML;
        this.pathogen = elementObject.querySelector(".pathogen").innerHTML;
        this.dataTypes = this.#getCharsArray(elementObject.querySelector(".data_types"))
        this.dataClasses = this.#getCharsArray(elementObject.querySelector(".data_classes"))
        this.date = this.#getYear(elementObject);
        this.id = elementObject.querySelector(".elem_id").innerHTML;
        this.map = new Map([
            ["pathogen_checkbox", this.pathogen],
            ["data_type_checkbox", this.dataTypes],
            ["data_class_checkbox", this.dataClasses],
            ["date_checkbox", this.date]
        ])
        this.fullDate = this.#getFullDate(elementObject);
    }

    #getYear(elem) {
        let fullDate = elem.querySelector(".publ_date").innerHTML;
        let year = fullDate.split('.')[2];
        if (year[0] === '2' || year[0] === '1' || year[0] === '0') {
            year = '20' + year;
        } else {
            year = '19' + year;
        }
        return year;
    }

    #getCharsArray(array) {
        let filteredArray = array.innerHTML.split(",").filter(e => e !== '');
        filteredArray = filteredArray.map(elem => elem.replace(/ /g,''));
        return filteredArray;
    }

    #getFullDate(elem) {
        let fullDate = elem.querySelector(".publ_date").innerHTML;
        let [day, month, year] = fullDate.split('.');
        if (year[0] === '2' || year[0] === '1' || year[0] === '0') {
            year = '20' + year;
        } else {
            year = '19' + year;
        }
        return new Date(year, month, day);
    }
}