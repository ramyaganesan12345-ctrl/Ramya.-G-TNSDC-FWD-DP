// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Modal behavior
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const modalClose = document.getElementById('modal-close');

projects.forEach(p => {
  p.addEventListener('click', () => {
    modalTitle.textContent = p.getAttribute('data-title');
    modalDesc.textContent = p.getAttribute('data-desc');
    modalLink.href = p.getAttribute('data-link');
    modal.classList.add('open');
  });
});
modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

// Contact form (demo only)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('msg').value.trim();
  if (!name || !msg) { status.textContent = 'Please fill in both fields.'; return; }
  status.textContent = 'Thanks — your message was sent (demo).';
  form.reset();
  setTimeout(() => status.textContent = '', 4000);
});

// Resume download
document.getElementById('download-resume').addEventListener('click', e => {
  e.preventDefault();
  const resume = `Ramya G\nComputer Science Student\n\nSkills:\n- HTML, CSS, JavaScript\n- React (learning)\n- Node.js, Git`;
  const blob = new Blob([resume], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Ramya_Resume.txt';
  a.click();
  URL.revokeObjectURL(url);
});

// ESC key to close modal
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });

