const firstNameInput = document.getElementById("firstName");
const middleNameInput = document.getElementById("middleName");
const lastNameInput = document.getElementById("lastName");
const designationInput = document.getElementById("designation");
const addressInput = document.getElementById("address");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const summaryInput = document.getElementById("summary");
const achievementTitleInput = document.getElementById("achievementTitle");
const achievementDescriptionInput = document.getElementById(
  "achievementDescription"
);
const experienceTitleInput = document.getElementById("experienceTitle");
const organizationInput = document.getElementById("organization");
const locationInput = document.getElementById("location");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const experienceDescriptionInput = document.getElementById(
  "experienceDescription"
);
const projectNameInput = document.getElementById("projectName");
const projectLinkInput = document.getElementById("projectLink");
const projectDescriptionInput = document.getElementById("projectDescription");
const imageInput = document.getElementById("imageInput");

const rightContentText = document.getElementById("rightContentText");
const rightDescription = document.getElementById("rightDescription");

// Listen for input events on the left container
firstNameInput.addEventListener("input", updateAboutText);
middleNameInput.addEventListener("input", updateAboutText);
lastNameInput.addEventListener("input", updateAboutText);
// designationInput.addEventListener('input', updateRightContainer);
// addressInput.addEventListener('input', updateRightContainer);
// emailInput.addEventListener('input', updateRightContainer);
// phoneInput.addEventListener('input', updateRightContainer);
// summaryInput.addEventListener('input', updateRightContainer);
// achievementTitleInput.addEventListener('input', updateRightContainer);
// achievementDescriptionInput.addEventListener('input', updateRightContainer);
// experienceTitleInput.addEventListener('input', updateRightContainer);
// organizationInput.addEventListener('input', updateRightContainer);
// locationInput.addEventListener('input', updateRightContainer);
// startDateInput.addEventListener('input', updateRightContainer);
// endDateInput.addEventListener('input', updateRightContainer);
// experienceDescriptionInput.addEventListener('input', updateRightContainer);
// projectNameInput.addEventListener('input', updateRightContainer);
// projectLinkInput.addEventListener('input', updateRightContainer);
// projectDescriptionInput.addEventListener('input', updateRightContainer);

imageInput.addEventListener("change", updateRightImage);

function updateAboutText() {
  AboutText.innerHTML = `
     ${firstNameInput.value} ${middleNameInput.value} ${lastNameInput.value}<br>
  `;
}

// Update the content of the right container based on the input from the left container
// function updateRightContainer() {
//     rightContentText.innerHTML = `
//         <b>Name:</b> ${firstNameInput.value} ${middleNameInput.value} ${lastNameInput.value}<br>
//         <b>Designation:</b> ${designationInput.value}<br>
//         <b>Address:</b> ${addressInput.value}<br>
//         <b>Email:</b> ${emailInput.value}<br>
//         <b>Phone:</b> ${phoneInput.value}<br>
//         <b>Summary:</b> ${summaryInput.value}<br>
//         <b>Achievement:</b> ${achievementTitleInput.value}<br>
//         <b>Experience:</b> ${experienceTitleInput.value}<br>
//         <b>Organization:</b> ${organizationInput.value}<br>
//         <b>Location:</b> ${locationInput.value}<br>
//         <b>Start Date:</b> ${startDateInput.value}<br>
//         <b>End Date:</b> ${endDateInput.value}<br>
//         <b>Project:</b> ${projectNameInput.value}<br>
//         <b>Project Link:</b> ${projectLinkInput.value}<br>
//     `;
//     rightDescription.innerHTML = `Description:<br>${achievementDescriptionInput.value}<br>${experienceDescriptionInput.value}<br>${projectDescriptionInput.value}`;
// }

function updateRightImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      let img = document.createElement("img");
      img.className = "object-cover rounded-full w-40 h-32";
      img.src = e.target.result;
      rightImage.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}
