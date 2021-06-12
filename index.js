//FORM
var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thanks for your submission!';
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);

//NAVBAR
const navList = document.querySelector('.nav__list');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', () => {
  // Add inactive class for smooth transition
  if (navList.classList.contains('active')) {
    navList.classList.add('inactive');
    setTimeout(() => {
      navList.classList.remove('inactive');
      navList.classList.toggle('active');
    }, 100);
  } else navList.classList.toggle('active');

  window.addEventListener('resize', removeClasses);
  burgerMenu.classList.toggle('active');
});

// Remove active sidebar on resize beyond set width
const removeClasses = () => {
  if (window.innerWidth > 672) {
    if (navList.classList.contains('active')) navList.classList.add('inactive');
    setTimeout(() => {
      navList.classList.remove('inactive');
      navList.classList.remove('active');
      burgerMenu.classList.remove('active');
    }, 100);
    window.removeEventListener('resize', removeClasses);
  }
};
