const urlParams = new URLSearchParams(window.location.search);

const skillValue = urlParams.get('skill');

console.log(skillValue);

const url =
  `https://jsearch.p.rapidapi.com/search?query=${skillValue}%20in%20Texas%2C%20USA&page=1&num_pages=1`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.status === "OK" && result.data && Array.isArray(result.data)) {
      const jobs = result.data;

      const jobListDiv = document.getElementById("jobList");

      jobListDiv.innerHTML = "";

      jobs.forEach((job) => {
        const jobTitle = job.job_title;
        const jobState = job.job_state;
        const jobCountry = job.job_country;
        const jobType = job.job_employment_type;
        const jobLogo = job.employer_logo;
        const jobApply = job.job_apply_link;

        // Append job information to jobListDiv
        jobListDiv.innerHTML += `
        <div class="w-full p-5 border border-gray-300 rounded my-6 flex justify-between items-center flex-wrap flex-wrap">
            <div class="flex py-5 flex-col gap-5 md:flex-row lg:flex-row 2xl:flex-row">
                <img src="${jobLogo}" alt="" width="80" class="mr-2">
                <div>
                    <p class="text-xl mb-2">${jobTitle}</p>
                    <h1 class="text-2xl font-bold">
                        <a href="${jobApply}" target="_blank" class="text-blue-500 hover:underline">Apply Now</a>
                    </h1>
                </div>
            </div>
            <div class="flex flex-col justify-end text-right">
                <p class="text-2xl mb-2"><i class="fa-solid fa-location-dot"></i> ${jobCountry} , ${jobState}</p>
                <p class="text-lg">${jobType}</p>
            </div>
        </div>
    `;
      });
    } else {
      console.error("Error: Failed to fetch jobs data.");
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

fetchData();
