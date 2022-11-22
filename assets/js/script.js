let musicPlaying = false

const cornellMp3 = new Audio('./assets/audio/almamater.mp3');
const torchSound = new Audio('./assets/audio/torch-sound.mp3')

cornellMp3.addEventListener('ended', () => {
        cornellMp3.currentTime = 0
        musicPlaying = false;
        playIcon.classList.toggle('fa-circle-play');
        playIcon.classList.toggle('fa-circle-pause');
})

const almaMater = document.getElementById('cornell-logo');
almaMater.addEventListener('click', (e) => {
    if (musicPlaying == false) {
        cornellMp3.play();
        musicPlaying = true;
        playIcon.classList.toggle('fa-circle-play');
        playIcon.classList.toggle('fa-circle-pause');

    } else {
        cornellMp3.pause();
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
    const targetToRemove = document.querySelectorAll('.activated');
    console.log(targetToRemove);
    targetToRemove.forEach((item) => {
        item.classList.add('hidden-modal');
        item.classList.remove('activated');
    })
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
const darkness = document.querySelector('.darkness');
torch.addEventListener('click', (e) => {
    torch.style.opacity = 0;
    setTimeout(function() {
    body.style.backgroundColor = 'white'}, 200);
    body.classList.add('torch-cursor');
    torchSound.play();
    torchSound.volume = .2;
    darkness.classList.remove('lights-on');
    document.addEventListener('pointermove', (pos) => {
  
        // Calculate mouse position in percentages.
        let x = parseInt( pos.clientX / window.innerWidth * 100 );
        let y = parseInt( pos.clientY / window.innerHeight * 100 );
      
        // Update the custom property values on the body.
        darkness.style.setProperty('--mouse-x', x + '%');
        darkness.style.setProperty('--mouse-y', y + '%'); 
      
    });
})

const nameBox = document.querySelector('#name-box');
const bio = document.querySelector('#bio-text')
const popup = document.querySelector('.popup')
const bioTitle = document.querySelector('#bio-title') 
nameBox.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    bio.classList.toggle('hidden-modal')
    popup.classList.toggle('hidden-modal')
    bioTitle.classList.toggle('hidden-modal')
    charsheet.classList.add('blur');
    nameBox.classList.remove('glowing');
    bio.classList.toggle('activated');
    popup.classList.toggle('activated');
    bioTitle.classList.toggle('activated');
})

const attributePopup = (id) => {
    console.log(id);
}

const stat = document.querySelectorAll('.stat');
console.log(stat);
stat.forEach((stat) => {
    stat.addEventListener('click', (e) => attributePopup(e.currentTarget.id))
})