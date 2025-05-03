// jobs.js - Dummy job data and job list logic

const jobs = [
  {
    id: 1,
    title: 'Dog Walker Needed',
    description: 'Walk my dog for 30 minutes in the park.',
    category: 'Pet Care',
    pay: 15,
    lat: 40.7138,
    lng: -74.0065,
    contact: 'alice@email.com'
  },
  {
    id: 2,
    title: 'Yard Cleanup',
    description: 'Help clean up leaves and branches.',
    category: 'Gardening',
    pay: 40,
    lat: 40.7152,
    lng: -74.0030,
    contact: 'bob@email.com'
  },
  {
    id: 3,
    title: 'Grocery Pickup',
    description: 'Pick up groceries from local store.',
    category: 'Errands',
    pay: 10,
    lat: 40.7100,
    lng: -74.0100,
    contact: 'carol@email.com'
  },
  {
    id: 4,
    title: 'Light Cleaning',
    description: 'Vacuum and dust living room.',
    category: 'Cleaning',
    pay: 25,
    lat: 40.7165,
    lng: -74.0080,
    contact: 'dan@email.com'
  }
];

function renderJobList(jobArray) {
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';
  if (!jobArray.length) {
    jobList.innerHTML = '<li>No jobs found.</li>';
    return;
  }
  jobArray.forEach(job => {
    const li = document.createElement('li');
    li.tabIndex = 0;
    li.innerHTML = `
      <strong>${job.title}</strong>
      <span>${job.description}</span>
      <span><b>Pay:</b> $${job.pay}</span>
      <span><b>Category:</b> ${job.category}</span>
    `;
    li.onclick = () => {
      // Center map on job marker and open popup
      if (window.map && window.L) {
        window.map.setView([job.lat, job.lng], 15);
      }
    };
    jobList.appendChild(li);
  });
}

// Expose for dashboard.js
window.jobs = jobs;
window.renderJobList = renderJobList; 