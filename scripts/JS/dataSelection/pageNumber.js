// const visibleElements = new VisibleElementsCollection;
// const elementsCollection = new DataCollection;

function pageNumber() {
    let activeButton = visibleElements.getActiveButton();
    let totalElements = elementsCollection.getElementsNumber();
    if (activeButton > totalElements) {
        return 1;
    } else {
        let pages = Math.ceil(totalElements / activeButton)
        return pages;
    }
}