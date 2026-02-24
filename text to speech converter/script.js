let speech = new SpeechSynthesisUtterance(); //play

// drop down
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });

};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// play
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});