const header = document.querySelector('.content__header');
const form = document.querySelector('.form');
const openModalBtn = document.getElementById('openModal');
const body = document.body;
const modal = document.getElementById('modal');
const modalForm = document.getElementById('modalForm');
const closeModalBtn = document.getElementById('closeModal');
const closeModalXsBtn = document.getElementById('closeModalXs');
const closeModalLowBtn = document.getElementById('closeModalLow');
const contentHeader = document.querySelector('.content__header');
const kebabBtn = document.getElementById('kebab');
const createBtn = document.createElement("button");

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('content__header--shadow');
  } else {
    header.classList.remove('content__header--shadow');
  }
});

kebabBtn.addEventListener('click', () => {
  createBtn.id = "create";
  createBtn.className = 'createBtn'
  createBtn.textContent = "Создать";

  kebabBtn.replaceWith(createBtn);
})

const openModal = () => {
  const form = document.getElementById('taskForm');
  body.style.overflow = 'hidden';
  contentHeader.style.position = 'static';
  modalForm.innerHTML = form.innerHTML;
  modal.style.display = 'flex';
  createBtn.replaceWith(kebabBtn);
}


const closeModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
  contentHeader.style.position = 'sticky';
}

openModalBtn.addEventListener('click', openModal);
createBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal);
closeModalXsBtn.addEventListener('click', closeModal);
closeModalLowBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});