class Data {

    constructor(elementObject){
        this.object = elementObject;
        this.html = elementObject.innerHTML;
        this.pathogen = elementObject.querySelector(".pathogen").innerHTML;
        this.authors = elementObject.querySelector(".authors").innerHTML;
        this.date = this.#getYear(elementObject);
        this.id = elementObject.querySelector(".elem_id").innerHTML;
        this.compartments = elementObject.querySelector(".compartments").innerHTML;
        this.species = elementObject.querySelector(".species").innerHTML;
        this.approach = elementObject.querySelector(".modeling_approach").innerHTML;
        this.type = elementObject.querySelector(".model_type").innerHTML;
        this.map = new Map([
            ["pathogen_checkbox", this.pathogen],
            ["date_checkbox", this.date],
            ["model_type_checkbox", this.type]
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