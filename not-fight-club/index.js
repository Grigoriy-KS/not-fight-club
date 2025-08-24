const registrationForm = document?.forms['registration-form'];
const submitButton = registrationForm?.['registration-form__submit-button'];
let characterName = '';

if (registrationForm) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    characterName = registrationForm['character-name']?.value;
    if (characterName) {
      window.localStorage.setItem('characterName', characterName);
    } else {
      alert('Please enter a valid character name');
    }
  });
}
