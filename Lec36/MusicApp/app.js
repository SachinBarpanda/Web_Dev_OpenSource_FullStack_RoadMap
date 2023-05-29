const playBtn = document.querySelector('#play-btn');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');

let songs = [
    {
        name : 'song1',
        id: 1
    },
    {
        name : 'song2',
        id: 2
    },{
        name : 'song3',
        id: 3
    },{
        name : 'song4',
        id: 4
    },
]

const audio = new Audio('./songAssests/song2.mp3');

// show songs in ul

for(let song of songs){
    const li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item');//styling
    songList.append(li);
}

// play btn click
playBtn.addEventListener('click', function(){
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-play-circle')){
        playBtn.children[0].classList.remove('fa-play-circle');
        playBtn.children[0].classList.add('fa-pause-circle');
    }else{
        playBtn.children[0].classList.add('fa-play-circle');
        playBtn.children[0].classList.remove('fa-pause-circle');
    }
});

audio.addEventListener('timeupdate',function(){
    const currentProgress = audio.currentTime * 100/audio.duration;
    progress.value = currentProgress;  
});

// seek the slider to forward 
progress.addEventListener('change', function(){
    const updatedTime = audio.duration * progress.value / 100;
    audio.currentTime = updatedTime;
})

// select the song
songList.addEventListener('click', function(e){
    let songId = e.target.getAttribute('id');
    audio.src = `./songAssests/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-play-circle');
    playBtn.children[0].classList.add('fa-pause-circle');
})