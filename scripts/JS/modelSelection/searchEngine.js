function searchByAuthor (event) {
    if (event.key === 'Enter' || event.type === 'focusout') {
        filterElements(0);
    } 
}

function clearSearchField (event) {
    if (event.target.value.length == 0) {
        filterElements(0);
    } 
}

document.querySelector('#model_search').addEventListener("keypress", searchByAuthor);
document.querySelector('#model_search').addEventListener("focusout", searchByAuthor);
document.querySelector('#model_search').addEventListener("input", clearSearchField);