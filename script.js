const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('menu-links')[0];
const dimBackground = document.getElementsByClassName('dim-background')[0];
const exitMobileButton = document.getElementsByClassName('exit-mobile-menu')[0];
const menuTabs = document.getElementsByClassName('menutabs');

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
});

// activated
exitMobileButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
});

// Listner
for (let i = 0; i < menuTabs.length; i += 1) {
  menuTabs[i].addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    dimBackground.classList.toggle('active');
    toggleButton.classList.toggle('active');
    exitMobileButton.classList.toggle('active');
  });
}

// #Location project data
const projectsList = [
  {
    name: 'My First Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'mobilepeojectpreview.jpg',
    feauturedImageDesktop: 'desktopSnapshot.svg',
    livelink: 'https://www.google.com/',
    sourcelink: 'https://www.github.com/',
  },
  {
    name: 'My Second Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Third Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Fourth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Fifth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Sixth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
];
// #End

// #Location Modal Pop Up
const modalPopUp = document.getElementsByClassName('modalcontainer')[0];
const overlayBg = document.getElementById('overlay');
const liveL = document.getElementById('see-live');
const sourceL = document.getElementById('see-source');
let currentScrollPosition = window.scrollY;

function ShowModal(index) {
  // Declare Variables
  const project = projectsList[index];
  currentScrollPosition = window.scrollY;
  // toggle pop up activation
  modalPopUp.classList.toggle('active');
  overlayBg.classList.toggle('active');
  // scroll all the way to the pop up
  window.scrollTo(0, 0);
  modalPopUp.querySelector('h3').textContent = project.name;
  modalPopUp.querySelectorAll('.tag').forEach((tag, index) => {
    tag.textContent = project.technologies[index];
  });
  modalPopUp.querySelector('p').textContent = project.description;
  liveL.setAttribute('onclick', `window.location.href='${project.livelink}'`);
  sourceL.setAttribute('onclick', `window.location.href='${project.sourcelink}'`);
}
// #EndLocation

const projectCardTemplate = document.getElementById('cardtemplate');
const projectsContainer = document.querySelector('.works');
for (let i = 0; i < projectsList.length; i += 1) {
  const projectCard = projectCardTemplate.content.cloneNode(true);
  const project = projectsList[i];
  projectCard.querySelector('h3').textContent = project.name;
  projectCard.querySelectorAll('.tag').forEach((tag, index) => {
    tag.textContent = project.technologies[index];
  });
  projectCard.querySelector('.button').textContent = 'See Project';
  projectCard.querySelector('.button').addEventListener('click', () => {
    ShowModal(i);
  });
  projectsContainer.appendChild(projectCard);
}
function HideModal() { // eslint-disable-line no-unused-vars
  modalPopUp.classList.toggle('active');
  overlayBg.classList.toggle('active');
  window.scrollTo(0, currentScrollPosition);
}

// #region
const form = document.getElementsByClassName('contact-form')[0];
const emailField = document.getElementById('email');
const setError = (message) => {
  const errorContainer = form.querySelector('.error');
  errorContainer.innerHTML = message;
  errorContainer.classList.add('error');
};

const validateInputs = () => {
  const emailSubmission = emailField.value;

  if (!(emailSubmission === emailSubmission.toLowerCase())) {
    setError('Your email needs to be lowercase');
    emailField.classList.toggle('activeerror');
  } else if (emailSubmission === '') {
    setError('Your email can not be empty');
    emailField.classList.toggle('activeerror');
  } else {
    setError('');
    emailField.classList.toggle('activeerror');
    form.submit();
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
// #endregion