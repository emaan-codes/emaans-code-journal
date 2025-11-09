// Safe DOM-ready wrapper + null-guards to avoid runtime errors when elements are missing
document.addEventListener('DOMContentLoaded', () => {
  // Get modal elements
  const modal = document.getElementById('myModal');
  const openModal = document.getElementById('openModal');
  const closeModal = document.querySelector('.close');

  // If modal is not present, nothing to do
  if (!modal) return;

  // Open modal when link is clicked (guarded)
  if (openModal) {
    openModal.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      modal.style.display = 'block';
    });
  }

  // Close modal when 'X' is clicked (guarded)
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Close modal when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
