const rsvpForm = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');
const attendanceInput = document.getElementById('attendance');

const responses = {
  yes: {
    message: '🎉 Party on! We look forward to seeing you at the GIF Gala!',
    background: 'https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif',
  },
  no: {
    message: '😔 We will miss you at the GIF Gala!',
    background: 'https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif',
  },
};

rsvpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const choice = responses[attendanceInput.value];

  if (!choice) {
    return;
  }

  confirmationMessage.textContent = choice.message;
  document.body.style.backgroundImage = `url("${choice.background}")`;
  confirmationMessage.style.display = 'block';
  rsvpForm.reset();
});
