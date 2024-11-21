const formData = { email: '', message: '' };

const form = document.querySelector('form.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const localData = localStorage.getItem('feedback-form-state');
if (localData) {
  const { email, message } = JSON.parse(localData);
  formData.email = email;
  formData.message = message;
  input.value = email;
  textarea.value = message;
}

const handleChangeInput = e => {
  formData.email = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const handleChangeTextarea = e => {
  formData.message = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const handleSubmit = e => {
  e.preventDefault();

  if (formData.email !== '' && formData.message !== '') {
    console.log(formData);
  } else alert('Fill please all fields');
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  input.value = '';
  textarea.value = '';
};

input.addEventListener('input', handleChangeInput);
textarea.addEventListener('input', handleChangeTextarea);
form.addEventListener('submit', handleSubmit);