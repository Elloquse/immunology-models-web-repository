let dropZoneContainer = document.querySelector(".dropzone");
let input = dropZoneContainer.querySelector("input");

const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    input.files = files;

} 
dropZoneContainer.addEventListener("drop", handleDrop);

let file;

dropZoneContainer.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZoneContainer.classList.add("dropzone_active");
})

dropZoneContainer.addEventListener("dragleave", () => {
    dropZoneContainer.classList.remove("dropzone_active");
})

dropZoneContainer.addEventListener("drop", (event) => {
    event.preventDefault();})