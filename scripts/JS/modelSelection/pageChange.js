function pageChange(newPage){
    let currentMaxElements = visibleElements.getActiveButton();
    let newElementsIndex = currentMaxElements * (newPage - 1);
    let newElementsPage = elementsCollection.newPage(newElementsIndex, currentMaxElements);
    elementsContainer.replaceChildren(...newElementsPage);
}
