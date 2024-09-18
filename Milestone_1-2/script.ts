// Function to update the progress bars
function updateSkillsProgress() {
    // Select the progress bar elements
    const msOfficeProgress = document.getElementById('ms-office');
    const photoshopProgress = document.getElementById('photoshop');

    // Update the width of progress bars
    if (msOfficeProgress && photoshopProgress) {
        msOfficeProgress.style.width = '95%';  // Increased MS Office skill
        photoshopProgress.style.width = '80%';  // Reduced Photoshop skill
    }
}

// Add event listener to the button to trigger the function
const button = document.getElementById('toggle-skills');
if (button) {
    button.addEventListener('click', updateSkillsProgress);
}