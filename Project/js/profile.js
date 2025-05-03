// profile.js - Handles profile page logic and dummy data

document.addEventListener('DOMContentLoaded', () => {
  // Dummy posted and applied jobs
  const posted = [
    { title: 'Dog Walker Needed', date: '2024-06-01', status: 'Open' },
    { title: 'Yard Cleanup', date: '2024-05-28', status: 'Filled' }
  ];
  const applied = [
    { title: 'Grocery Pickup', date: '2024-06-02', status: 'Pending' },
    { title: 'Light Cleaning', date: '2024-05-30', status: 'Accepted' }
  ];
  renderJobList('postedJobs', posted);
  renderJobList('appliedJobs', applied);

  document.getElementById('editProfileBtn').onclick = openEditProfileModal;
});

function renderJobList(listId, jobs) {
  const ul = document.getElementById(listId);
  ul.innerHTML = '';
  if (!jobs.length) {
    ul.innerHTML = '<li>No jobs.</li>';
    return;
  }
  jobs.forEach(job => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${job.title}</b> <span style="float:right;">${job.status}</span><br><small>${job.date}</small>`;
    ul.appendChild(li);
  });
}

function openEditProfileModal() {
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = `
    <div class="modal-bg" tabindex="-1" aria-modal="true" role="dialog">
      <div class="modal">
        <button class="close-modal" aria-label="Close" tabindex="0">&times;</button>
        <h2>Edit Profile</h2>
        <form id="editProfileForm" class="auth-form">
          <label>Username<input type="text" name="username" value="johndoe" required style="width: 100%; box-sizing: border-box;"></label>
          <label>Email<input type="email" name="email" value="johndoe@email.com" required style="width: 100%; box-sizing: border-box;"></label>
          <button type="submit" class="cta">Save</button>
        </form>
      </div>
    </div>
  `;
  document.querySelector('.close-modal').onclick = closeModal;
  document.querySelector('.modal-bg').onclick = (e) => { if(e.target === e.currentTarget) closeModal(); };
  document.getElementById('editProfileForm').onsubmit = (e) => {
    e.preventDefault();
    closeModal();
    alert('Profile updated! (dummy)');
  };
}
function closeModal() {
  document.getElementById('modalContainer').innerHTML = '';
} 