let musicPlaying = false

const cornellMp3 = new Audio('./assets/audio/almamater.mp3');
const torchSound = new Audio('./assets/audio/torch-sound.mp3')

const almaMater = document.getElementById('cornell-logo');
almaMater.addEventListener('click', (e) => {
    if (musicPlaying == false) {
        cornellMp3.play();
        musicPlaying = true;
        playIcon.classList.toggle('fa-circle-play');
        playIcon.classList.toggle('fa-circle-pause');

    } else {
        cornellMp3.pause();
        cornellMp3.currentTime = 0
        musicPlaying = false;
        playIcon.classList.toggle('fa-circle-play');
        playIcon.classList.toggle('fa-circle-pause');
    }
})

const cornellLogo = document.getElementById('cornell-logo');
const playIcon = document.querySelector('.fa-circle-play')
cornellLogo.addEventListener('mouseover', (e) => {
    playIcon.classList.remove('hidden');
})

cornellLogo.addEventListener('mouseout', (e) => {
    playIcon.classList.add('hidden');
})

const charsheet = document.querySelector('.charsheet');
const modal = document.querySelector('.modal');
const bioPic = document.querySelector('#name > img')
const fullPic = document.querySelector('#full-pic');

bioPic.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    charsheet.classList.add('blur');
    fullPic.classList.toggle('hidden-modal');
    fullPic.classList.toggle('activated');
})

modal.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    charsheet.classList.remove('blur');
    const targetToRemove = document.querySelector('.activated');
    targetToRemove.classList.toggle('hidden-modal');
    targetToRemove.classList.toggle('activated');
})

const nameBox = document.querySelector('#name-box');
nameBox.addEventListener('click', (e) => {
    nameBox.classList.remove('glowing');
})

const pibbClicker = document.querySelector('#beagle');
const pibbPic = document.querySelector('#pibb-pic');

pibbClicker.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    charsheet.classList.add('blur');
    pibbPic.classList.toggle('hidden-modal');
    pibbPic.classList.toggle('activated');
})

const torch = document.querySelector('#torch-out');
const body = document.body;
torch.addEventListener('click', (e) => {
    torch.style.opacity = 0;
    body.classList.add('torch-cursor');
    torchSound.play();
})