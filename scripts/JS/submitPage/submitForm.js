const multiStepForm = document.querySelector("form");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.find(step => {
    return step.classList.contains("active");
});

multiStepForm.addEventListener("click", e => {
    if (e.target.matches("[data-next]")) {

        currentStep.classList.remove("active");
        let currentStepValue = parseInt(currentStep.dataset.step);
        formSteps[currentStepValue + 1].classList.add("active");
        currentStep = formSteps[currentStepValue + 1];

    } else if (e.target.matches("[data-previous]")) {

        currentStep.classList.remove("active");
        let currentStepValue = parseInt(currentStep.dataset.step);
        formSteps[currentStepValue - 1].classList.add("active");
        currentStep = formSteps[currentStepValue - 1];
        
    }
})