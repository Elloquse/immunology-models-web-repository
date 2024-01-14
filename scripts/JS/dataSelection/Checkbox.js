class Checkbox {
    constructor(checkbox) {
        this.html = checkbox;
        this.value = checkbox.value;
        this.class = checkbox.className;
        this.name = checkbox.name;
        this.state = checkbox.checked;
    }
}

class DateInput {
    constructor(date) {
        this.html = date;
        this.type = date.id;
        this.value = date.value;
    }
}