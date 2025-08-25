const registrationForm = document?.forms['registration-form'];
const submitButton = registrationForm?.['registration-form__submit-button'];
let characterName = '';

if (registrationForm) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    characterName = registrationForm['character-name']?.value;
    // console.log(characterName);
    if (characterName) {
      window.localStorage.setItem('characterName', characterName);
      // console.log(window.location.pathname);
      window.location.pathname = window.location.pathname.slice(0, window.location.pathname.lastIndexOf("/") + 1) + 'home.html';
      // console.log(window.location.pathname);
    } else {
      alert('Please enter a valid character name');
    }
  });
}
