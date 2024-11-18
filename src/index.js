require("../style/main.scss");
require('./images/newsifylogobig.png');
require('./images/newsifyphone.png')
//Splash screen

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        document.getElementById("splash-screen").style.display = "none";


        document.getElementById("onboarding-1").style.display = "block";
    }, 3000);
});

// Onboarding
window.nextOnboarding = function(currentStep) {
       
    document.getElementById(`onboarding-${currentStep}`).classList.remove('active');

   
    const nextStep = currentStep + 1;
    const nextOnboardingScreen = document.getElementById(`onboarding-${nextStep}`);
    if (nextOnboardingScreen) {
        nextOnboardingScreen.classList.add('active');
    }

 
    updateIndicators(nextStep);
}


window.endOnboarding = function() {
   
    document.getElementById("onboarding-container").style.display = "none";

}


function updateIndicators(step) {
   
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index + 1 === step);
    });
}

