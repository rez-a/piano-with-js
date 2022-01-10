let keyboard = document.querySelector('.keys');
let notePlayed = document.querySelector('.note-played')
let keyList = document.querySelectorAll('.key');

document.addEventListener('keydown', function(e) {
    let key = keyboard.querySelector(`.key[data-code =${e.code}]`)
    if (!key) return;

    key.classList.add('played');
    let note = key.getAttribute('data-note');
    notePlayed.innerHTML = note;
})

keyList.forEach(key => {
    key.addEventListener('transitionend', function() {
        this.classList.remove('played');
    })
})