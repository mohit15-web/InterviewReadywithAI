let i = 1;
let jobSerachanchor = document.getElementById("jobSerachanchor");
let projectSerachanchor = document.getElementById("projectSerachanchor");

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
const projectNameInput = document.getElementById("projectNameInput");
const projectLinkInput = document.getElementById("projectLinkInput");
const projectDescriptionInput = document.getElementById(
  "projectDescriptionInput"
);
const imageInput = document.getElementById("imageInput");

const rightContentText = document.getElementById("rightContentText");
const rightDescription = document.getElementById("rightDescription");

const schoolNameInput = document.getElementById("schoolName");
const degreeInput = document.getElementById("degree");
const schoolLocationInput = document.getElementById("schoolLocation");
const schoolStartDateInput = document.getElementById("schoolStartDate");
const schoolEndDateInput = document.getElementById("schoolEndDate");
const schoolDescriptionInput = document.getElementById("schoolDescription");

schoolNameInput.addEventListener("input", updateEducaText);
degreeInput.addEventListener("input", updateEducaText);
schoolLocationInput.addEventListener("input", updateEducaText);
schoolStartDateInput.addEventListener("input", updateEducaText);
schoolEndDateInput.addEventListener("input", updateEducaText);
schoolDescriptionInput.addEventListener("input", updateEducaText);

// Listen for input events on the left container
firstNameInput.addEventListener("input", updateNameText);
middleNameInput.addEventListener("input", updateNameText);
lastNameInput.addEventListener("input", updateNameText);
designationInput.addEventListener("input", updateNameText);
addressInput.addEventListener("input", updateAboutText);
emailInput.addEventListener("input", updateAboutText);
phoneInput.addEventListener("input", updateAboutText);
summaryInput.addEventListener("input", updateAboutText);

achievementTitleInput.addEventListener("input", updateAchieText);
achievementDescriptionInput.addEventListener("input", updateAchieText);

experienceTitleInput.addEventListener("input", updateExperiText);
organizationInput.addEventListener("input", updateExperiText);
locationInput.addEventListener("input", updateExperiText);
startDateInput.addEventListener("input", updateExperiText);
endDateInput.addEventListener("input", updateExperiText);
experienceDescriptionInput.addEventListener("input", updateExperiText);

projectNameInput.addEventListener("input", updateProjectText);
projectLinkInput.addEventListener("input", updateProjectText);
projectDescriptionInput.addEventListener("input", updateProjectText);

imageInput.addEventListener("change", updateRightImage);

const nameText = document.getElementById("nameText");
const aboutText = document.getElementById("aboutText");
const AchieText = document.getElementById("AchieText");
const EducaText = document.getElementById("EducaText");
const ExperiText = document.getElementById("ExperiText");
const ProjectText = document.getElementById("ProjectText");

function updateNameText() {
  nameText.innerHTML = `
  <h1 class="text-2xl font-bold mb-2">
  ${firstNameInput.value} ${middleNameInput.value} ${lastNameInput.value}
  </h1>
  <hr>
  <h2 class="text-xl text-center my-2">${designationInput.value}</h2>
  `;
}

function updateAboutText() {
  aboutText.innerHTML = `
     ${phoneInput.value} <br> ${emailInput.value} <br> ${addressInput.value}<br> ${summaryInput.value}<br>
  `;
}

function updateAchieText() {
  AchieText.innerHTML = `
     <b>${achievementTitleInput.value}</b> <br> ${achievementDescriptionInput.value} <br>
  `;
}

function updateEducaText() {
  EducaText.innerHTML = `
  <h1 class="text-2xl font-bold py-2">${schoolNameInput.value}</h1>
  <h2 class="text-xl mr-2">${degreeInput.value} ${schoolLocationInput.value}<span class="text-sm ml-5 text-white bg-green-800 px-1 py-1 rounded"> ${schoolStartDateInput.value} </span>  <span class="text-sm ml-5 text-white bg-green-800 px-1 py-1 rounded">${schoolEndDateInput.value}</span></h2>
  `;
}

function updateExperiText() {
  ExperiText.innerHTML = `
  <h1 class="text-2xl font-bold py-2">${experienceTitleInput.value}</h1>
  <h2 class="text-xl mr-2">${organizationInput.value} ${locationInput.value}<span class="text-sm ml-5 text-white bg-green-800 px-1 py-1 rounded"> ${startDateInput.value} </span>  <span class="text-sm ml-5 text-white bg-green-800 px-1 py-1 rounded">${endDateInput.value}</span></h2>
  `;
}

function updateProjectText() {
  ProjectText.innerHTML = `
  <h1>${projectNameInput.value}</h1>
  <h2>${projectLinkInput.value} </h2>
  <h2>${projectDescriptionInput.value}</h2>
  `;
}

const skillText = document.getElementById("skillText");
const skill = document.getElementById("skill");
skill.addEventListener("input", updateSkillText);

function updateSkillText(i) {
  const skill2 = document.createElement("h2");
  skill2.classList.add(`a${i}`);
  // skill2.classList.add("bor");
  skillText.appendChild(skill2);

  document.getElementById(`${i}`).addEventListener("input", function (e) {
    let skill2 = document.querySelector(`.a${i}`);
    console.log(skillText);
    skill2.innerText = e.target.value;
    jobSerachanchor.href = `../jobPage/jobSearch.html?skill=${e.target.value}`;
    projectSerachanchor.href = `../projectPage/projectRecommend.html?project=${e.target.value}`;
    console.log(projectSerachanchor);
  });

  let btns = document.getElementsByClassName("closeBtn");

  for (let j = 0; j < btns.length; j++) {
    btns[j].addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.style.display = "none";
      if (btns[j].classList.contains(`${i}`)) {
        skill2.style.display = "none";
      }
    });
  }
}

function addMoreSkills() {
  const skillContainer = document.getElementById("skillsContainer");
  const skill = document.createElement("div");
  skill.className =
    "skillDiv w-full mb-3 border h-0 transition ease-in duration-500 border-gray-300 flex flex-col gap-10 p-5";
  skill.innerHTML = `
  <div class="flex relative">
    <div class="flex flex-col ">
      <label class="text-black font-bold mb-2">Skill</label>
      <button class="close closeBtn ${i + 1}" aria-hidden="true">X</button>

      <input id="${i + 1}" type="text"
        class=" p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-80">
    </div>`;
  skillContainer.appendChild(skill);

  setTimeout(() => {
    skill.classList.add("h-32");
  }, 0);
  var idx = i + 1;

  updateSkillText(idx);
  i++;
}

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

function generatePDF() {
  const element = document.getElementById("preview-sc");

  html2pdf().from(element).save("CV.pdf");
}

function downloadCode() {
  generatePDF();
}

document.getElementById("printBtn").addEventListener("click", function () {
  var contentToPrint = document.getElementById("preview-sc").innerHTML;
  var originalBodyContent = document.body.innerHTML;
  document.body.innerHTML = contentToPrint;
  window.print();
  document.body.innerHTML = originalBodyContent;
});

// const skills = []

function addMoreProjects() {
  const skillContainer = document.getElementById("ProjectContainer");
  const project = document.createElement("div");
  project.className =
    "projectDiv w-full mb-3 border border-gray-300 flex flex-col gap-10 p-5 mt-5";
  project.innerHTML = `
  <div class="flex flex-col gap-10 lg:flex-row relative">
  <button class="close" id="closeBtn" onclick="removeProject()" aria-hidden="true">X</button>

  <div class="flex flex-col">
      <label class="text-black font-bold">Project Name</label>
      <input id="projectNameInput" type="text"
          class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
  </div>

  <div class="flex flex-col">
      <label class="text-black font-bold">Project link</label>
      <input id="projectLinkInput" type="text"
          class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
  </div>

  <div class="flex flex-col">
      <label class="text-black font-bold">Description</label>
      <input id="projectDescriptionInput" type="text"
          class="p-2 mt-2 border border-gray-300 rounded  w-78 sm:w-96 lg:w-64">
  </div>
</div>
  `;
  ProjectContainer.appendChild(project);
}

function removeProject() {
  const projects = document.querySelectorAll(".projectDiv");

  projects.forEach((project) => {
    project.style.display = "none";
  });
}

function addMoreEducation() {
  const EducationContainer = document.getElementById("EducationContainer");
  const education = document.createElement("div");
  education.className =
    "educationDiv w-full mb-3 border border-gray-300 flex flex-col gap-10 p-5 mt-5";

  education.innerHTML = `
                <div class="flex flex-col gap-10 lg:flex-row relative">
  <button class="close" id="closeBtn" onclick="removeEducation()" aria-hidden="true">X</button>

                    <div class="flex flex-col">
                        <label class="text-black font-bold">School</label>
                        <input id="schoolName" type="text"
                            class=" p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-black font-bold">Degree</label>
                        <input id="degree" type="text"
                            class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black font-bold">City</label>
                        <input id="schoolLocation" type="text"
                            class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
                    </div>
                </div>

                <div class="flex flex-col gap-10 lg:flex-row">
                    <div class="flex flex-col">
                        <label class="text-black font-bold">Start Date</label>
                        <input id="schoolStartDate" type="date"
                            class="p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:border-blue-500 w-78 sm:w-96 lg:w-64">
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black font-bold">End Date</label>
                        <input id="schoolEndDate" type="date"
                            class=" p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64"
                            placeholder="e.g. Accountant">
                    </div>

                    <div class="flex flex-col">
                        <label class="text-black font-bold">Description</label>
                        <input id="schoolDescription" type="text"
                            class="p-2 mt-2 border border-gray-300 rounded w-78 sm:w-96 lg:w-64"
                            placeholder="e.g. Lake Street-23">
                    </div>
                </div>
            
    `;

  EducationContainer.appendChild(education);
}

function removeEducation() {
  const educations = document.querySelectorAll(".educationDiv");

  educations.forEach((education) => {
    education.style.display = "none";
  });
}

function addMoreExperience() {
  const experienceContainer = document.getElementById("experienceContainer");
  const experience = document.createElement("div");
  experience.className =
    "experienceDiv w-full mb-3 border border-gray-300 flex flex-col gap-10 p-5 mt-5";

  experience.innerHTML = `
                  <div class="flex flex-col gap-10 lg:flex-row relative">
    <button class="close" id="closeBtn" onclick="removeExperience()" aria-hidden="true">X</button>
  
                      <div class="flex flex-col">
                          <label class="text-black font-bold">Title</label>
                          <input id="schoolName" type="text"
                              class=" p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
                      </div>
                      <div class="flex flex-col">
                          <label class="text-black font-bold">Company/Organization</label>
                          <input id="degree" type="text"
                              class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
                      </div>
  
                      <div class="flex flex-col">
                          <label class="text-black font-bold">Location</label>
                          <input id="schoolLocation" type="text"
                              class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
                      </div>
                  </div>
  
                  <div class="flex flex-col gap-10 lg:flex-row">
                      <div class="flex flex-col">
                          <label class="text-black font-bold">Start Date</label>
                          <input id="schoolStartDate" type="date"
                              class="p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:border-blue-500 w-78 sm:w-96 lg:w-64">
                      </div>
  
                      <div class="flex flex-col">
                          <label class="text-black font-bold">End Date</label>
                          <input id="schoolEndDate" type="date"
                              class=" p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64"
                              placeholder="e.g. Accountant">
                      </div>
  
                      <div class="flex flex-col">
                          <label class="text-black font-bold">Description</label>
                          <input id="schoolDescription" type="text"
                              class="p-2 mt-2 border border-gray-300 rounded w-78 sm:w-96 lg:w-64"
                              placeholder="e.g. Lake Street-23">
                      </div>
                  </div>
              
      `;

  experienceContainer.appendChild(experience);
}

function removeExperience() {
  const experiences = document.querySelectorAll(".experienceDiv");

  experiences.forEach((experience) => {
    experience.style.display = "none";
  });
}

function addMoreAchievements() {
  const achievementsContainer = document.getElementById(
    "achievementsContainer"
  );
  const achievment = document.createElement("div");
  achievment.className =
    "achievementDiv w-full mb-3 border border-gray-300 flex flex-col gap-10 p-5 mt-5";
  achievment.innerHTML = `
  <div class="flex flex-col gap-10 lg:flex-row relative">
  <button class="close" id="closeBtn" onclick="removeAchievement()" aria-hidden="true">X</button>

  <div class="flex flex-col">
      <label class="text-black font-bold">Title</label>
      <input id="projectNameInput" type="text"
          class="p-2 border border-gray-300 rounded mt-2 w-78 sm:w-96 lg:w-64">
  </div>

  <div class="flex flex-col">
      <label class="text-black font-bold">Description</label>
      <input id="projectDescriptionInput" type="text"
          class="p-2 mt-2 border border-gray-300 rounded  w-78 sm:w-96 lg:w-64">
  </div>
</div>
  `;
  achievementsContainer.appendChild(achievment);
}

function removeAchievement() {
  const achievements = document.querySelectorAll(".achievementDiv");

  achievements.forEach((achievement) => {
    achievement.style.display = "none";
  });
}

addMoreSkills();
