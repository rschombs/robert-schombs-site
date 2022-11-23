import { plusMinus } from './attributes.js'

let musicPlaying = false

const cornellMp3 = new Audio('./assets/audio/almamater.mp3');
const torchSound = new Audio('./assets/audio/torch-sound.mp3')

const xp = document.querySelector('#info-box-5')
const bd = new Date(1984, 8, 27)
const td = new Date();
let ttime= td.getTime();
let btime = bd.getTime();
let diff = Math.round((ttime - btime)/(1000*60*60*24));
xp.textContent = diff

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
    const bulletRemove = document.querySelectorAll('.bullet')
    targetToRemove.forEach((item) => {
        item.classList.add('hidden-modal');
        item.classList.remove('activated');
    })
    bulletRemove.forEach((item) => {
        item.remove();
    })
    const title = document.querySelector('#targetTitle');
    if (title) title.remove();
    const background = document.querySelector('.background-icon');
    if (background) background.remove();
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

const iconObj = { str: ["fa-solid", "fa-hand-fist"], dex: ["fa-solid", "fa-wind"], con: ["fa-solid", "fa-heart"], int: ["fa-solid", "fa-hat-wizard"], wis: ["fa-solid", "fa-scale-balanced"], cha: ["fa-solid", "fa-eye"] }

const colorObj = { 
    dex: "#239ebd", 
    con: "#a5151c", 
    int: "#0e771d", 
    wis: "#2d53d1", 
    cha: "#7912a1" }

const attrPopup = document.querySelector('.attr-popup');
const bulletContainer = document.querySelector('.bullet-container')
const handleAttribute = (e) => {
    modal.classList.toggle('hidden-modal');
    charsheet.classList.add('blur');
    attrPopup.classList.toggle('hidden-modal')
    attrPopup.classList.toggle('activated');
    const attrID = e.currentTarget.id;
    const bgIcon = document.createElement('i');
    bgIcon.classList.add(...iconObj[attrID]);
    bgIcon.classList.add('background-icon');
    if (attrID !== str) bgIcon.style.color = colorObj[attrID];
    attrPopup.append(bgIcon);
    const title = document.createElement('div');
    title.classList.add('popup-title');
    title.setAttribute('id', 'targetTitle');
    title.textContent = plusMinus[attrID].title;
    attrPopup.prepend(title);
    plusMinus[attrID].positives.forEach((positive) => {
        const tick = document.createElement('i');
        tick.classList = 'fa-solid fa-plus';
        tick.style.color = '#0e771d'
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bulletContainer.append(bullet);
        const text = document.createTextNode(positive);
        bullet.append(tick);
        bullet.append(text);
    })

    plusMinus[attrID].negatives.forEach((negative) => {
        const tick = document.createElement('i');
        tick.classList = 'fa-solid fa-minus';
        tick.style.color = '#a5151c'
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bulletContainer.append(bullet);
        const text = document.createTextNode(negative);
        bullet.append(tick);
        bullet.append(text);
    })
}

const attributes = document.querySelectorAll('.stat')
attributes.forEach((attribute) => {
    attribute.addEventListener('click', (e) => handleAttribute(e));
})