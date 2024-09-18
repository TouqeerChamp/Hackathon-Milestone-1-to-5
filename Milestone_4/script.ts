const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Function to update Editable Resume
function updateEditableResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>${name}</h3>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>`;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
}

const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input',updateResume);
});

// Invoke
updateEditableResume();
