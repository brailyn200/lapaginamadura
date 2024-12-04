// Referencias a los elementos
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

// Abrir el modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Cerrar el modal
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
