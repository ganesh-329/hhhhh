// Main JS for Quick Lister
// Handles modal opening and navigation

document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modalContainer');

  function openModal(type) {
    if (modalContainer.innerHTML.trim() !== '') return; // Prevent double modals

    modalContainer.innerHTML = `
      <div class="modal-bg" tabindex="-1" aria-modal="true" role="dialog">
        <div class="modal">
          <button class="close-modal" aria-label="Close" tabindex="0">&times;</button>
          <h2>${type === 'login' ? 'Login' : 'Sign Up'}</h2>
          <form id="${type}Form" class="auth-form">
            <label> 
              Username or Email
              <input type="text" name="username" required style="width: 100%; box-sizing: border-box;" autocomplete="username">
            </label>
            <label>
              Password
              <input type="password" name="password" required style="width: 100%; box-sizing: border-box;" autocomplete="${type === 'login' ? 'current-password' : 'new-password'}">
            </label>
            ${type === 'signup' ? `
              <label>
                Confirm Password
                <input type="password" name="confirm" required style="width: 100%; box-sizing: border-box;">
              </label>` : ''}
            <button type="submit" class="cta">${type === 'login' ? 'Login' : 'Sign Up'}</button>
          </form>
        </div>
      </div>
    `;

    document.querySelector('.close-modal').onclick = closeModal;

    document.querySelector('.modal-bg').onclick = (e) => {
      if (e.target === e.currentTarget) closeModal();
    };

    document.addEventListener('keydown', escHandler);

    const form = document.getElementById(`${type}Form`);
    form.onsubmit = (e) => {
      e.preventDefault();

      const password = form.elements['password'].value;

      if (type === 'signup') {
        if (password.length < 8) {
          alert('Password must be at least 8 characters long.');
          return;
        }

        const confirm = form.elements['confirm'].value;
        if (password !== confirm) {
          alert('Passwords do not match.');
          return;
        }
      }

      closeModal();
      window.location.href = 'dashboard.html'; // dummy redirect
    };
  }

  function closeModal() {
    modalContainer.innerHTML = '';
    document.removeEventListener('keydown', escHandler);
  }

  function escHandler(e) {
    if (e.key === 'Escape') closeModal();
  }

  document.getElementById('loginBtn').onclick = () => openModal('login');
  document.getElementById('signupBtn').onclick = () => openModal('signup');
  document.getElementById('getStartedBtn').onclick = () => openModal('signup');
});
