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
// const navList = document.querySelector('.nav__list');
// const burgerMenu = document.querySelector('.burger');

// burgerMenu.addEventListener('click', () => {
//   // Add inactive class for smooth transition
//   if (navList.classList.contains('active')) {
//     navList.classList.add('inactive');
//     setTimeout(() => {
//       navList.classList.remove('inactive');
//       navList.classList.toggle('active');
//     }, 100);
//   } else navList.classList.toggle('active');

//   window.addEventListener('resize', removeClasses);
//   burgerMenu.classList.toggle('active');
// });
//----------------new navbar

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  //Toggle Nav
  nav.classList.toggle('nav-active');

  //Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  //Burger Animation
  burger.classList.toggle('toggle');
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

//-------------gallery
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', (e) => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
