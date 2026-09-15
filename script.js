/**
 * Hospital Management System — Portal Selector & Architecture Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('btn-about');
  const modal = document.getElementById('about-modal');
  const closeBtn = document.getElementById('btn-modal-close');

  const openModal = () => {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (aboutBtn) aboutBtn.focus();
  };

  if (aboutBtn) {
    aboutBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking directly on the backdrop overlay
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
