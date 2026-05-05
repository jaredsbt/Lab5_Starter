window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = `
      <option value="select" disabled selected>Select Voice:</option>
    `;

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  button.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedIndex = voiceSelect.value;
    if (selectedIndex !== 'select') {
      utterance.voice = voices[selectedIndex];
    }

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  });
}