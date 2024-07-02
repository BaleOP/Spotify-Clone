console.log("Welcome to Spotify");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('myGif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName:"G.O.A.T",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Lemonade",filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Clash",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Born To Shine",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Kinni Kinni",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Lover",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Naina",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Peaches",filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
]

// songItem.forEach((element,i)=>{
//     element.getElementsByTagName('img')[0].src=songs[i].coverPath;
//     element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
// })

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
        updatePlayIcon(songIndex);
        masterSongName.innerText=songs[songIndex].songName;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
        updatePlayIcon(songIndex);
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        updatePlayIcon(songIndex);
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    updatePlayIcon(songIndex);
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    updatePlayIcon(songIndex);
})


const updatePlayIcon = (index) => {
    makeAllPlays();
    document.getElementById(index).classList.remove('fa-circle-play');
    document.getElementById(index).classList.add('fa-circle-pause');
}


