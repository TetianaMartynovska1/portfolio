// script.js
const toggleButton = document.getElementById('contact-form');
const message = document.getElementById('contact-form__message');

toggleButton.addEventListener('click', function (event) {
  event.preventDefault();
  toggleButton.style.display = 'none';
  message.style.display = 'block';
});
document.querySelector('.works-section__article').addEventListener('mouseover', function() {
    document.getElementById('project-button').style.display = 'block';
});

document.querySelector('.works-section__article').addEventListener('mouseout', function() {
    document.getElementById('project-button').style.display = 'none';
});

