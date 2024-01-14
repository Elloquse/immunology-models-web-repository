const progressLine = document.querySelector(".progress_line");
const progressSteps = document.querySelectorAll(".step");
const nextButtons = document.querySelectorAll("[data-next]");
const previousButtons = document.querySelectorAll("[data-previous]");
const header = document.querySelector("header");
let progressActive = 1;

nextButtons.forEach(button => {
    button.addEventListener("click", () => {
        progressActive++;
        if (progressActive > progressSteps.length) {
            progressActive = progressSteps.length;
        }
        updateProgress();
        header.scrollIntoView({behavior: 'smooth' });
    })
})

previousButtons.forEach(button => {
    button.addEventListener("click", () => {
        progressActive--;
        if (progressActive < 1) {
            progressActive = 1;
        }
        updateProgress();
        header.scrollIntoView({behavior: 'smooth' });
    })
})

function updateProgress () {
    
    progressLine.style.width = ((progressActive - 1) / (progressSteps.length - 1)) * 100 + "%";
    progressLine.style.transition = "width 500ms";
    
    setTimeout(changeActiveStep, 275);
    function changeActiveStep () {
        progressSteps.forEach((step, i) => {
            if (i < progressActive) {
                step.classList.add("active_step");
            } 
        })
    }
    progressSteps.forEach((step, i) => {
        if (i < progressActive) {
        } else {
            step.classList.remove("active_step");
        }
    })
}