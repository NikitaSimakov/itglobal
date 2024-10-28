const header = document.querySelector('.content__header');
const form = document.querySelector('.form');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('content__header--shadow');
  } else {
    header.classList.remove('content__header--shadow');
  }
});

const openModalBtn = document.getElementById('openModal');
const body = document.body;
const modal = document.getElementById('modal');
const modalForm = document.getElementById('modalForm');
const closeModalBtn = document.getElementById('closeModal');
const contentHeader = document.querySelector('.content__header');
const kebabBtn = document.getElementById('kebab');
const createBtn = document.createElement("button");

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

openModalBtn.addEventListener('click', openModal);
createBtn.addEventListener('click', openModal)

const closeModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
  contentHeader.style.position = 'sticky';
}

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});