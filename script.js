// Function to toggle secret section visibility
function togglesecret() {
  const secretContent = document.getElementById('secretcontent');
  if (secretContent) {
    secretContent.style.display = secretContent.style.display === 'none' ? 'block' : 'none';
  }
}

// Safe DOM-ready wrapper + null-guards to avoid runtime errors when elements are missing
document.addEventListener('DOMContentLoaded', () => {
  // Update footer "last update" date automatically
  const lastEl = document.getElementById('last-update');
  if (lastEl) {
    const now = new Date();
    const formatted = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    lastEl.textContent = `Last update: ${formatted}`;
  }
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
      // use 'flex' so the CSS centering (display:flex; align-items/justify-content)
      // takes effect and the modal content appears centered
      modal.style.display = 'flex';
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
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
document.querySelector(".dropdown-btn").onclick = function () {
  const dropdown = document.querySelector(".dropdown-content");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
};

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



