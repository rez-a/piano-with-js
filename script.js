let keyboard = document.querySelector('.keys');
let notePlayed = document.querySelector('.note-played')

document.addEventListener('keydown', function(e) {
    let key = keyboard.querySelector(`.key[data-code =${e.code}]`)

    if (!key) return;

    let note = key.getAttribute('data-note');
    notePlayed.innerHTML = note;
})