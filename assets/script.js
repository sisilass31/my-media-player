const video_container = document.querySelector('.video_container');

//video
const video = document.createElement('video');
video.classList.add('video');
video_container.appendChild(video);
const source = document.createElement('source')
source.setAttribute("src", "./assets/video_1080p.mp4");
video.appendChild(source);

//div contrôle
const controls = document.createElement('div');
controls.classList.add('controls');
video_container.appendChild(controls);

//backward
const backward = document.createElement('button');
backward.classList.add('backward');
controls.appendChild(backward);
const backward_img = document.createElement('img');
backward_img.setAttribute("src", "assets/img/backward.png");
backward.appendChild(backward_img);

//play
const play = document.createElement('button');
play.classList.add('play');
controls.appendChild(play);
const icon_play = document.createElement('img');
icon_play.classList.add('icon_play');
icon_play.setAttribute("src", "./assets/img/play.png");
play.appendChild(icon_play);

//foward
const foward = document.createElement('button');
foward.classList.add('forward');
controls.appendChild(foward);
const foward_img = document.createElement('img');
foward_img.setAttribute("src", "assets/img/foward.png");
foward.appendChild(foward_img);
 
// video time
const slidebar = document.createElement('input');
slidebar.classList.add('slidebar');
slidebar.setAttribute("type", "range");
slidebar.setAttribute('min', '0');
slidebar.setAttribute('max', '100');
slidebar.setAttribute('value', '0');
slidebar.setAttribute('step', '1');
controls.appendChild(slidebar);

// time
const time_label = document.createElement('div');
time_label.classList.add('time');
time_label.innerText = ' 00:00/00:00 ';
controls.appendChild(time_label);

// volume
const sound = document.createElement('button');
sound.classList.add('sound');
controls.appendChild(sound);

const full_sound_img = document.createElement('img');
full_sound_img.classList.add('full_sound_img');
full_sound_img.setAttribute("src", "./assets/img/full_volume.png");
sound.appendChild(full_sound_img);

const soundbar = document.createElement('input');
soundbar.classList.add('soundbar');
soundbar.setAttribute("type", "range");
soundbar.setAttribute('min', '0');
soundbar.setAttribute('max', '100');
soundbar.setAttribute('value', '100');
soundbar.setAttribute('step', '1');
sound.appendChild(soundbar);

// full screen
const fullscreen = document.createElement('button');
fullscreen.classList.add('full_sound_img');
controls.appendChild(fullscreen);
const fullscreen_img = document.createElement('img');
fullscreen_img.setAttribute("src", "./assets/img/full_screen.png");
fullscreen.appendChild(fullscreen_img);

video.removeAttribute('controls');

// play
video.onclick = function () {
    if (video.paused) {
        video.play();
        icon_play.setAttribute("src", "./assets/img/play.png");

    } else {
        video.pause();
        icon_play.setAttribute("src", "./assets/img/pause.png");
    }
};

play.onclick = function () {
    if (video.paused) {
        video.play();
        icon_play.setAttribute("src", "./assets/img/play.png");

    } else {
        video.pause();
        icon_play.setAttribute("src", "./assets/img/pause.png");
    }
};

// foward
foward.onclick = function () {
    video.currentTime += 10;
};

// backward
backward.onclick = function () {
    video.currentTime -= 10;
};

// slidebar
slidebar.onchange = function () {
    var seekto = video.duration * (slidebar.value / 100);
    video.currentTime = seekto;
}

// full screen
fullscreen.onclick = function () {
    video.requestFullscreen();
}

// time
video.ontimeupdate = function () {
    var minutesAll = Math.floor(video.duration / 60);
    var secondsAll = Math.round(video.duration / 10);
    var minutes = "0" + Math.floor(video.currentTime / 60);
    var seconds = Math.floor(video.currentTime - minutes * 60);

    if (seconds < 10) {
        seconds = "0" + Math.floor(video.currentTime - minutes * 60);
    } else {
        seconds = seconds
    }

    mediaTime = minutes + ":" + seconds;
    mediaAll = "0" + minutesAll + ":" + secondsAll;

    time_label.textContent = mediaTime + "/" + mediaAll;
};


full_sound_img.onclick = function () {
    if (video.muted) {
        video.muted = false;
        full_sound_img.setAttribute("src", "./assets/img/full_volume.png");
    } else {
        video.muted = true;
        full_sound_img.setAttribute("src", "./assets/img/mute_volume.png");
    }
};

// soundbar
soundbar.onchange = function () {
    video.volume = soundbar.value / 100;

    if (soundbar.value <= 50) {
        full_sound_img.setAttribute("src", "./assets/img/low_volume.png");
    } else {
        full_sound_img.setAttribute("src", "./assets/img/full_volume.png");
    }
    if (soundbar.value <= 10) {
        full_sound_img.setAttribute("src", "./assets/img/volume.png");
    }
    if (soundbar.value <= 0) {
        full_sound_img.setAttribute("src", "./assets/img/mute_volume.png");
    }
}