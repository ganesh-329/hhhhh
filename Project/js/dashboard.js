// dashboard.js - Main dashboard logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize map and job list
  window.initMap(window.jobs);
  window.renderJobList(window.jobs);

  // Post Job Modal
  document.getElementById('postJobBtn').onclick = () => openPostJobModal();

  // Logout (dummy)
  document.getElementById('logoutBtn').onclick = () => {
    window.location.href = 'index.html';
  };

  // Profile (dummy)
  document.getElementById('profileBtn').onclick = () => {
    window.location.href = 'profile.html';
  };
});

function openPostJobModal() {
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = `
    <div class="modal-bg" tabindex="-1" aria-modal="true" role="dialog">
      <div class="modal">
        <button class="close-modal" aria-label="Close" tabindex="0">&times;</button>
        <h2>Post a Job</h2>
        <form id="postJobForm" class="auth-form">
          <label>Title<input type="text" name="title" required style="width: 100%; box-sizing: border-box;"></label>
          <label>Description<textarea name="description" required style="width: 100%; box-sizing: border-box;"></textarea></label>
          <label>Category
            <select name="category" required style="width: 100%; box-sizing: border-box;">
              <option value="">Select</option>
              <option>Pet Care</option>
              <option>Gardening</option>
              <option>Errands</option>
              <option>Cleaning</option>
              <option>Other</option>
            </select>
          </label>
          <label>Pay ($)<input type="number" name="pay" min="1" required style="width: 100%; box-sizing: border-box;"></label>
          <label>Contact Info<input type="text" name="contact" required style="width: 100%; box-sizing: border-box;"></label>
          <label>Location (lat, lng)
            <input type="text" name="lat" placeholder="Latitude" required style="width: 48%; box-sizing: border-box; margin-right: 4%;">
            <input type="text" name="lng" placeholder="Longitude" required style="width: 48%; box-sizing: border-box;">
          </label>
          <button type="submit" class="cta">Post Job</button>
        </form>
      </div>
    </div>
  `;
  document.querySelector('.close-modal').onclick = closeModal;
  document.querySelector('.modal-bg').onclick = (e) => { if(e.target === e.currentTarget) closeModal(); };
  document.getElementById('postJobForm').onsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newJob = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      pay: parseFloat(form.pay.value),
      lat: parseFloat(form.lat.value),
      lng: parseFloat(form.lng.value),
      contact: form.contact.value
    };
    window.jobs.push(newJob);
    window.renderJobList(window.jobs);
    window.initMap(window.jobs);
    closeModal();
  };
}
function closeModal() {
  document.getElementById('modalContainer').innerHTML = '';
} 