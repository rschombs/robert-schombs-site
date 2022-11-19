let musicPlaying = false

const cornellMp3 = new Audio('./assets/audio/almamater.mp3');

const almaMater = document.getElementById('cornell-logo');
almaMater.addEventListener('click', (e) => {
    if (musicPlaying == false) {
        cornellMp3.play();
        musicPlaying = true
    } else {
        cornellMp3.pause();
        cornellMp3.currentTime = 0
        musicPlaying = false;
    }
})

const cornellLogo = document.getElementById('cornell-logo');
cornellLogo.addEventListener('mouseover', (e) => {
    cornellLogo.classList.add('active');
})

cornellLogo.addEventListener('mouseout', (e) => {
    cornellLogo.classList.remove('active');
})