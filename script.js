let keyboard = document.querySelector('.keys');
let notePlayed = document.querySelector('.note-played')
let keyList = document.querySelectorAll('.key');
let hintList = keyboard.querySelectorAll('.hint');

document.addEventListener('keydown', function(e) {
    let key = keyboard.querySelector(`.key[data-code =${e.code}]`);
    let audio = document.querySelector(`audio[data-code =${e.code}]`)
    if (!key) return;

    key.classList.add('played');
    audio.currentTime = 0;
    audio.play();
    let note = key.getAttribute('data-note');
    notePlayed.innerHTML = note;
})

keyList.forEach(key => {
    key.addEventListener('transitionend', function() {
        this.classList.remove('played');
    })
})
hintList.forEach((hint, index) => {
    hint.setAttribute('style', `transition-delay:${index*50}ms`);
})