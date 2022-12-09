let musicPlaying = false

const cornellMp3 = new Audio('./assets/audio/almamater.mp3');
const torchSound = new Audio('./assets/audio/torch-sound.mp3')
const locked = new Audio ('./assets/audio/locked.mp3');

const xp = document.querySelector('#info-box-5')
const bd = new Date(1984, 8, 27)
const td = new Date();
let ttime= td.getTime();
let btime = bd.getTime();
let diff = Math.round((ttime - btime)/(1000*60*60*24));
if (xp) xp.textContent = diff;

cornellMp3.addEventListener('ended', () => {
        cornellMp3.currentTime = 0
        musicPlaying = false;
        playIcon.classList.toggle('fa-circle-play');
        playIcon.classList.toggle('fa-circle-pause');
})

const almaMater = document.getElementById('cornell-logo');
almaMater.addEventListener('click', (e) => {
    if (musicPlaying === false) {
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
    const email = document.querySelector('#email-text');
    if (email) email.remove();
})

const pibbClicker = document.querySelector('#beagle');
const pibbPic = document.querySelector('#pibb-pic');

pibbClicker.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    charsheet.classList.add('blur');
    pibbPic.classList.toggle('hidden-modal');
    pibbPic.classList.toggle('activated');
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

const jobs = document.querySelector('#info-box-1');
const classText = document.querySelector('#class-text')
const jobsTitle = document.querySelector('#jobs-title') 
jobs.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    classText.classList.toggle('hidden-modal')
    popup.classList.toggle('hidden-modal')
    jobsTitle.classList.toggle('hidden-modal')
    charsheet.classList.add('blur');
    classText.classList.toggle('activated');
    popup.classList.toggle('activated');
    jobsTitle.classList.toggle('activated');
})

const email = document.querySelector('.email-click');
const emailText = document.querySelector('#email-popup')
const emailTitle = document.querySelector('#email-title') 
email.addEventListener('click', (e) => {
    modal.classList.toggle('hidden-modal');
    emailText.classList.toggle('hidden-modal')
    popup.classList.toggle('hidden-modal')
    emailTitle.classList.toggle('hidden-modal')
    charsheet.classList.add('blur');
    emailText.classList.toggle('activated');
    const a = 'rob';
    const b = '@';
    const c = 'reason';
    const d = 'prep';
    const f = '.';
    const g = 'com';
    const full = document.createElement('div');
    full.classList.add('popup-text-line');
    full.setAttribute('id', 'email-text');
    full.textContent = a + b + c + d + f + g;
    emailText.append(full);
    popup.classList.toggle('activated');
    emailTitle.classList.toggle('activated');
})

const iconObj = { 
    str: ["fa-solid", "fa-hand-fist"], 
    dex: ["fa-solid", "fa-wind"], 
    con: ["fa-solid", "fa-heart"], 
    int: ["fa-solid", "fa-hat-wizard"], 
    wis: ["fa-solid", "fa-scale-balanced"], 
    cha: ["fa-solid", "fa-eye"],
    str2: ["fa-solid", "fa-hand-fist"], 
    dex2: ["fa-solid", "fa-wind"], 
    con2: ["fa-solid", "fa-heart"], 
    int2: ["fa-solid", "fa-hat-wizard"], 
    wis2: ["fa-solid", "fa-scale-balanced"], 
    cha2: ["fa-solid", "fa-eye"], }

const colorObj = { 
    dex: "#239ebd", 
    con: "#a5151c", 
    int: "#0e771d", 
    wis: "#2d53d1", 
    cha: "#7912a1",
    dex2: "#239ebd", 
    con2: "#a5151c", 
    int2: "#0e771d", 
    wis2: "#2d53d1", 
    cha2: "#7912a1",
 }

 const plusMinus = {
    str: {title: "STRENGTH", positives: ["Lifted weights in college"], negatives:["Stopped lifting weights after college"]},
    dex: {title: "DEXTERITY", positives: ["High school violinist", "Played beer league ice hockey"], negatives:["Bangs shins into stuff a lot"]},
    con: {title: "CONSTITUTION", positives: ["Thinks he's unbreakable, like the Bruce Willis movie", "Reasonably healthy, all things considered"], negatives:["Picky eater", "Four eye surgeries"]},
    int: {title: "INTELLIGENCE", positives: ["Loves to learn", "Really good at tests"], negatives:["Permanent ABD (All but dissertation)"]},
    wis: {title: "WISDOM", positives: ["Married up", "Dog owner"], negatives:["Beagle owner"]},
    cha: {title: "CHARISMA", positives: ["Mentor to thousands of students"], negatives:["Reserved"]},
    str2: {title: "STRENGTH", positives: ["Lifted weights in college"], negatives:["Stopped lifting weights after college"]},
    dex2: {title: "DEXTERITY", positives: ["High school violinist", "Played beer league ice hockey"], negatives:["Bangs shins into stuff a lot"]},
    con2: {title: "CONSTITUTION", positives: ["Thinks he's unbreakable, like the Bruce Willis movie", "Reasonably healthy, all things considered"], negatives:["Picky eater", "Four eye surgeries"]},
    int2: {title: "INTELLIGENCE", positives: ["Loves to learn", "Really good at tests"], negatives:["Permanent ABD (All but dissertation)"]},
    wis2: {title: "WISDOM", positives: ["Married up", "Dog owner"], negatives:["Beagle owner"]},
    cha2: {title: "CHARISMA", positives: ["Mentor to thousands of students"], negatives:["Reserved"]},
}

const attrPopup = document.querySelector('.attr-popup');
const bulletContainer = document.querySelector('.bullet-container')
const handleAttribute = (e) => {
    modal.classList.toggle('hidden-modal');
    charsheet.classList.add('blur');
    attrPopup.classList.toggle('hidden-modal')
    attrPopup.classList.toggle('activated');
    const attrID = e.currentTarget.id;
    console.log(attrID);
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

const subjects = document.querySelector('#subjects');
const tutoringMessage = document.querySelector('#tutoring-message');
subjects.addEventListener('mouseover', () => {
    tutoringMessage.classList.add('tutoring-message')
    tutoringMessage.textContent = "Click here to learn more!"
})

subjects.addEventListener('mouseout', () => {
    tutoringMessage.classList.remove('tutoring-message')
    tutoringMessage.textContent = '\xa0'
})

let x, y; 

const torchOn = (pos) => {
            // Calculate mouse position in percentages.
            x = parseInt( pos.clientX / window.innerWidth * 100 );
            y = parseInt( pos.clientY / window.innerHeight * 100 );
          
            // Update the custom property values on the body.
            darkness.style.setProperty('--mouse-x', x + '%');
            darkness.style.setProperty('--mouse-y', y + '%');
}

const exit = document.querySelector('.exit');
exit.addEventListener('mouseover', () => {
    document.removeEventListener('pointermove', torchOn);
    darkness.classList.toggle('darkness-total');
    darkness.classList.toggle('darkness');
})

exit.addEventListener('mouseout', () => {
    document.addEventListener('pointermove', torchOn); 
    darkness.classList.toggle('darkness-total');
    darkness.classList.toggle('darkness');
})

exit.addEventListener('click', () => {
    if (document.querySelector('.game-text')) darkness.removeChild(document.querySelector('.game-text'));
    charsheet.style.pointerEvents = "all";
    door.style.pointerEvents = "all";
    door.classList.toggle('lights-on')
    torch.style.opacity = 1;
    body.style.backgroundColor = 'black';
    body.classList.remove('torch-cursor');
    torchSound.pause();
    torchSound.currentTime = 0;
    dread.pause();
    dread.currentTime = 0;
    darkness.classList.add('lights-on');
    
})

const torch = document.querySelector('#torch-out');
const body = document.body;
const door = document.querySelector('#door-pic');
const darkness = document.querySelector('.darkness');
torch.addEventListener('click', (e) => {
    charsheet.style.pointerEvents = "none";
    torch.style.opacity = 0;
    setTimeout(function() {
        body.style.backgroundColor = 'white'}, 200);
    body.classList.add('torch-cursor');
    torchSound.play();
    torchSound.volume = .4;
    darkness.classList.remove('lights-on');
    setTimeout(function() {
        door.classList.toggle('lights-on');}, 200);
    document.addEventListener('pointermove', torchOn); 
})

const dread = new Audio('./assets/audio/dread.mp3');

function playDread() {
    dread.play();
}

door.addEventListener('mouseover', (e) => {
    if (musicPlaying === true) {
        cornellMp3.pause();
        cornellMp3.currentTime = 0
        musicPlaying = false;
        playIcon.classList.toggle('fa-circle-play');
        playIcon.classList.toggle('fa-circle-pause');
}
    playDread();
});

const text1 = "The door is locked, the key lost decades ago.";
const text2 = "Pray that it is never found...";
const text3 = "[COMING SOON]";


const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }

async function typeWriter(text, target) {    
    let i = 0;
    while (i < text.length) {
      document.querySelector(target).innerHTML += text.charAt(i);
      i++;
      await delay(50);
    }
      await delay(500);
  }

door.addEventListener('click', async () => {
    locked.play();
    door.style.pointerEvents = "none";
    const textMessage = document.createElement('div');
    textMessage.classList.toggle('game-text');
    darkness.append(textMessage);
    const m1 = document.createElement('p');
    textMessage.append(m1);
    m1.setAttribute('id', 'm1');
    await typeWriter(text1, '#m1')
    const m2 = document.createElement('p');
    textMessage.append(m2);
    m2.setAttribute('id', 'm2');
    await typeWriter(text2, '#m2')
    const m3 = document.createElement('p');
    textMessage.append(m3);
    m3.setAttribute('id', 'm3');
    await typeWriter(text3, '#m3')
    await delay (1000);
    textMessage.classList.add('fade-out');
    await delay (1000);
    darkness.removeChild(textMessage);
    door.style.pointerEvents = "all";
});