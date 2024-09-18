var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Function to update the resume display
function updateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>".concat(name, "</h3>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
}
// Add event listeners to all input and textarea elements
var inputs = document.querySelectorAll('input, textarea');
inputs.forEach(function (input) {
    input.addEventListener('input', updateResume);
});
// Initial update
updateResume();
