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

  // Credential Copy Handler (with visual toast and timeout reset)
  const copyButtons = document.querySelectorAll('.cred-chip');
  copyButtons.forEach((button) => {
    let resetTimer = null;

    button.addEventListener('click', async () => {
      const textToCopy = button.getAttribute('data-copy');
      if (!textToCopy) return;

      let copySuccess = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          copySuccess = true;
        } catch (err) {
          console.warn('Clipboard API failed, using fallback:', err);
        }
      }

      if (!copySuccess) {
        // Fallback for non-HTTPS or unsupported contexts
        try {
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          textarea.style.top = '-9999px';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          copySuccess = document.execCommand('copy');
          document.body.removeChild(textarea);
        } catch (fallbackErr) {
          console.error('Copy fallback failed:', fallbackErr);
        }
      }

      if (copySuccess) {
        if (resetTimer) clearTimeout(resetTimer);
        button.classList.add('is-copied');
        resetTimer = setTimeout(() => {
          button.classList.remove('is-copied');
          resetTimer = null;
        }, 1600);
      }
    });
  });
});
