let currentmusic = 0;
let RepeatButton = document.getElementById('Repeat-Button');
let RepeatNum = document.getElementById('RepeatNum');

//Audio tags variables
const music = document.querySelector('#audio');
const rainsnd = document.querySelector('#rain_sfx');
const windsnd = document.querySelector('#wind_sfx');
const wavesnd = document.querySelector('#wave_sfx');
const streetsnd = document.querySelector('#street_sfx');
const campsnd = document.querySelector('#campfire_sfx');
const festsnd = document.querySelector('#fest_sfx');
const cafesnd = document.querySelector('#caffe_sfx');
const librarysnd = document.querySelector('#library_sfx');
const warsnd = document.querySelector('#war_sfx');


//sound player variables
const muteRain = document.getElementById('rainvol');
const downRain = document.getElementById('downrainvol');
const mutedRain = document.getElementById('mutedrainvol');
const rainrange = document.getElementById('rainrng');

const muteWind = document.getElementById('windvol');
const downWind = document.getElementById('downwindvol');
const mutedWind = document.getElementById('mutedwindvol');
const windrange = document.getElementById('windrng');

const muteWave = document.getElementById('wavevol');
const downWave = document.getElementById('downwavevol');
const mutedWave = document.getElementById('mutedwavevol');
const waverange = document.getElementById('waverng');

const muteStreet= document.getElementById('streetvol');
const downStreet = document.getElementById('downstreetvol');
const mutedStreet = document.getElementById('mutedstreetvol');
const streetrange = document.getElementById('streetrng');

const muteCampFire = document.getElementById('campfirevol');
const downCampFire = document.getElementById('downcampfirevol');
const mutedCampFire = document.getElementById('mutedcampfirevol');
const CampFirerange = document.getElementById('campfirerng');

const muteFest = document.getElementById('festvol');
const downFest = document.getElementById('downfestvol');
const mutedFest = document.getElementById('mutedfestvol');
const Festrange = document.getElementById('festrng');

const muteCafe = document.getElementById('caffevol');
const downCafe = document.getElementById('downcaffevol');
const mutedCafe = document.getElementById('mutedcaffevol');
const Caferange = document.getElementById('cafferng');

const muteLibrary = document.getElementById('libraryvol');
const downLibrary = document.getElementById('downlibraryvol');
const mutedLibrary = document.getElementById('mutedlibraryvol');
const Libraryrange = document.getElementById('libraryrng');

const muteWar = document.getElementById('warvol');
const downWar = document.getElementById('downwarvol');
const mutedWar = document.getElementById('mutedwarvol');
const Warrange = document.getElementById('warrng');


//music player variables
/*const Seekbar = document.querySelector('.seek-bar');
const MusicName = document.querySelector('.music-name');
const ArtistName = document.querySelector('.artist-name'); 
const SongImage = document.querySelector('.song-image');
const CurrentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const PlayBtn = document.querySelector('.play-btn');
const ForwardBtn = document.querySelector('.forward-btn');
const BackwardBtn = document.querySelector('.backward-btn');*/

/*
PlayBtn.addEventListener('click', () => {
    if(PlayBtn.className.includes("pause")){
        music.play();
    }
    else{music.pause();}
    PlayBtn.classList.toggle('pause');
});

var RepeatTimes = 0;
RepeatButton.addEventListener('click', () => {
    if(RepeatTimes < 3){
        RepeatTimes++;
    }
    else{
        RepeatTimes = 0;
    }
    RepeatNum.innerHTML = RepeatTimes;
    if(RepeatTimes == 0){
        RepeatNum.innerHTML = '';
    }
    console.log(RepeatTimes);
});

const SetMusic = (i) => {
        Seekbar.value = 0; 
        let song = songs[i];
        currentmusic = i;
        music.src = song.path; 

        MusicName.innerHTML = song.name;
        ArtistName.innerHTML = song.artist;
        //SongImage.style.BackgroundImage = 'url('${song.cover}')';
        
        CurrentTime.innerHTML = '00:00';    
        setTimeout(() => {
            Seekbar.max = music.duration;
            musicDuration.innerHTML = formatTime(music.duration);
        }, 300)

}

SetMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = '0' + min;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = '0' + sec;
    }
    /*if(min < 10 && sec < 10){
        return "0" + min + ":" + "0" +sec;
    }*//*
    return min + ":" + sec;
}

setInterval(() => {
    Seekbar.value = music.currentTime;
    CurrentTime.innerHTML = formatTime(music.currentTime);
        if(Math.floor(music.currentTime) == Math.floor(Seekbar.max) && RepeatTimes < 1){
            ForwardBtn.click();
        } 
        else if (Math.floor(music.currentTime) == Math.floor(Seekbar.max) && RepeatTimes > 0){
            music.currentTime = 0;
            RepeatTimes--;
            RepeatNum.innerHTML = RepeatTimes;
            if(RepeatTimes == 0){
                RepeatNum.innerHTML = '';
            }
        }
}, 300);

Seekbar.addEventListener('change', () => {
    music.currentTime = Seekbar.value;
});

const PlayMusic = () => {
    music.play();   
    PlayBtn.classList.remove('pause');
}

ForwardBtn.addEventListener('click', () => {
    if(currentmusic >= songs.length -1){
        currentmusic = 0;
    } else{
        currentmusic++;
    }
    SetMusic(currentmusic);
    PlayMusic();
});
BackwardBtn.addEventListener('click', () => {
    if(currentmusic <= 0){
        currentmusic = songs.length -1;
    } else{
        currentmusic--;
    }
    SetMusic(currentmusic);
    PlayMusic();
});

/***********************************************Sounds that always play**************************************************/
//Rain Effect
var RainsfxOn = 0;
var RainPlaying = false;

muteRain.addEventListener('click', () =>{
    rainrange.value = 0;
    return RainsfxOn = 0; 
});
downRain.addEventListener('click', () => {
    rainrange.value = 0;
    return RainsfxOn = 0; 
});
mutedRain.addEventListener('click', () => {
    rainsnd.volume = rainrange.value;  
    RainPlaying = true;
    rainrange.value = 0.25;
    RainsfxOn = 1;
});
const checkRain = setInterval(() => {
    if(RainPlaying == true){
        //console.log("Rain Playing");
        rainsnd.play();   
    }
    if(RainPlaying == false){
        rainsnd.volume = 0;
        muteRain.style.display = "none";
        downRain.style.display = "none";
        mutedRain.style.display = "inline";
    }
});
const rainvolume = setInterval(() => {
    if(RainsfxOn == 1){
        rainsnd.volume = rainrange.value; 
    }
    if(RainsfxOn == 0){
        rainsnd.volume = 0;
    }
    if(rainrange.value == 0){
        muteRain.style.display = "none";
        downRain.style.display = "none";
        mutedRain.style.display = "inline";
    }
    if(rainrange.value > 0){
        rainsnd.volume = rainrange.value;
        RainPlaying = true;
        muteRain.style.display = "inline";
        downRain.style.display = "none";
        mutedRain.style.display = "none";
        RainsfxOn = 1;
    }
    if(rainrange.value < 0.16 && rainrange.value > 0){
        muteRain.style.display = "none";
        downRain.style.display = "inline";
        mutedRain.style.display = "none";
    }
});//End Rain Effect
//Wind Effect********************************************************************************************************
var WindsfxOn = 0;
var WindPlaying = false;

muteWind.addEventListener('click', () =>{
    windrange.value = 0;
    return WindsfxOn = 0; 
});
downWind.addEventListener('click', () => {
    windrange.value = 0;
    return WindsfxOn = 0; 
});
mutedWind.addEventListener('click', () => {
    windsnd.volume = windrange.value;  
    WindPlaying = true;
    windrange.value = 0.25;
    WindsfxOn = 1;
});
const checkWind = setInterval(() => {
    if(WindPlaying == true){
        //console.log("Wind Playing");
        windsnd.play();   
    }
    if(WindPlaying == false){
        windsnd.volume = 0;
        muteWind.style.display = "none";
        downWind.style.display = "none";
        mutedWind.style.display = "inline";
    }
});
const windvolume = setInterval(() => {
    if(WindsfxOn == 1){
        windsnd.volume = windrange.value; 
    }
    if(WindsfxOn == 0){
        windsnd.volume = 0;
    }
    if(windrange.value == 0){
        muteWind.style.display = "none";
        downWind.style.display = "none";
        mutedWind.style.display = "inline";
    }
    if(windrange.value > 0){
        windsnd.volume = windrange.value;
        WindPlaying = true;
        muteWind.style.display = "inline";
        downWind.style.display = "none";
        mutedWind.style.display = "none";
        WindsfxOn = 1;
    }
    if(windrange.value < 0.16 && windrange.value > 0){
        muteWind.style.display = "none";
        downWind.style.display = "inline";
        mutedWind.style.display = "none";
    }
});//End Wind Effect
//Wave Effect***************************************************************************************************************
var WavesfxOn = 0;
var WavePlaying = false;


muteWave.addEventListener('click', () =>{
    waverange.value = 0;
    return WavesfxOn = 0; 
});
downWave.addEventListener('click', () => {
    waverange.value = 0;
    return WavesfxOn = 0; 
});
mutedWave.addEventListener('click', () => {
    wavesnd.volume = waverange.value;  
    WavePlaying = true;
    waverange.value = 0.25;
    WavesfxOn = 1;
});
const checkWave = setInterval(() => {
    if(WavePlaying == true){
        //console.log("Wave Playing");
        wavesnd.play();   
    }
    if(WavePlaying == false){
        wavesnd.volume = 0;
        muteWave.style.display = "none";
        downWave.style.display = "none";
        mutedWave.style.display = "inline";
    }
});
const wavevolume = setInterval(() => {
    if(WavesfxOn == 1){
        wavesnd.volume = waverange.value; 
    }
    if(WavesfxOn == 0){
        wavesnd.volume = 0;
    }
    if(waverange.value == 0){
        muteWave.style.display = "none";
        downWave.style.display = "none";
        mutedWave.style.display = "inline";
    }
    if(waverange.value > 0){
        wavesnd.volume = waverange.value;
        WavePlaying = true;
        muteWave.style.display = "inline";
        downWave.style.display = "none";
        mutedWave.style.display = "none";
        WavesfxOn = 1;
    }
    if(waverange.value < 0.16 && waverange.value > 0){
        muteWave.style.display = "none";
        downWave.style.display = "inline";
        mutedWave.style.display = "none";
    }
});//End Wave Effect
//Street Effect**************************************************************************************************************
var StreetsfxOn = 0;
var StreetPlaying = false;


muteStreet.addEventListener('click', () =>{
    streetrange.value = 0;
    return StreetsfxOn = 0; 
});
downStreet.addEventListener('click', () => {
    streetrange.value = 0;
    return StreetsfxOn = 0; 
});
mutedStreet.addEventListener('click', () => {
    streetsnd.volume = streetrange.value;  
    StreetPlaying = true;
    streetrange.value = 0.25;
    StreetsfxOn = 1;
});
const checkStreet = setInterval(() => {
    if(StreetPlaying == true){
        //console.log("Street Playing");
        streetsnd.play();   
    }
    if(StreetPlaying == false){
        streetsnd.volume = 0;
        muteStreet.style.display = "none";
        downStreet.style.display = "none";
        mutedStreet.style.display = "inline";
    }
});
const streetvolume = setInterval(() => {
    if(StreetsfxOn == 1){
        streetsnd.volume = streetrange.value; 
    }
    if(StreetsfxOn == 0){
        streetsnd.volume = 0;
    }
    if(streetrange.value == 0){
        muteStreet.style.display = "none";
        downStreet.style.display = "none";
        mutedStreet.style.display = "inline";
    }
    if(streetrange.value > 0){
        streetsnd.volume = streetrange.value;
        StreetPlaying = true;
        muteStreet.style.display = "inline";
        downStreet.style.display = "none";
        mutedStreet.style.display = "none";
        StreetsfxOn = 1;
    }
    if(streetrange.value < 0.16 && streetrange.value > 0){
        muteStreet.style.display = "none";
        downStreet.style.display = "inline";
        mutedStreet.style.display = "none";
    }
});//End Street Effect
//Camp Fire Effect **************************************************************************************
var CampFiresfxOn = 0;
var CampPlaying = false;


muteCampFire.addEventListener('click', () =>{
    CampFirerange.value = 0;
    return CampFiresfxOn = 0; 
});
downCampFire.addEventListener('click', () => {
    CampFirerange.value = 0;
    return CampFiresfxOn = 0; 
});
mutedCampFire.addEventListener('click', () => {
    campsnd.volume = CampFirerange.value;  
    CampPlaying = true;
    CampFirerange.value = 0.25;
    CampFiresfxOn = 1;
});
const checkCampFire = setInterval(() => {
    if(CampPlaying == true){
        //console.log("Street Playing");
        campsnd.play();   
    }
    if(CampPlaying == false){
        campsnd.volume = 0;
        muteCampFire.style.display = "none";
        downCampFire.style.display = "none";
        mutedCampFire.style.display = "inline";
    }
});
const CampFirevolume = setInterval(() => {
    if(CampFiresfxOn == 1){
        campsnd.volume = CampFirerange.value; 
    }
    if(CampFiresfxOn == 0){
        campsnd.volume = 0;
    }
    if(CampFirerange.value == 0){
        muteCampFire.style.display = "none";
        downCampFire.style.display = "none";
        mutedCampFire.style.display = "inline";
    }
    if(CampFirerange.value > 0){
        campsnd.volume = CampFirerange.value;
        CampPlaying = true;
        muteCampFire.style.display = "inline";
        downCampFire.style.display = "none";
        mutedCampFire.style.display = "none";
        CampFiresfxOn = 1;
    }
    if(CampFirerange.value < 0.16 && CampFirerange.value > 0){
        muteCampFire.style.display = "none";
        downCampFire.style.display = "inline";
        mutedCampFire.style.display = "none";
    }
});//End Camp Fire Effect
//Festival Effect **************************************************************************************
var FestsfxOn = 0;
var FestPlaying = false;


muteFest.addEventListener('click', () =>{
    Festrange.value = 0;
    return FestsfxOn = 0; 
});
downFest.addEventListener('click', () => {
    Festrange.value = 0;
    return FestsfxOn = 0; 
});
mutedFest.addEventListener('click', () => {
    festsnd.volume = Festrange.value;  
    FestPlaying = true;
    Festrange.value = 0.25;
    FestsfxOn = 1;
});
const checkFest = setInterval(() => {
    if(FestPlaying == true){
        festsnd.play(); 
    }
    if(FestPlaying == false){
        festsnd.volume = 0;
        muteFest.style.display = "none";
        downFest.style.display = "none";
        mutedFest.style.display = "inline";
    }
});
const Festvolume = setInterval(() => {
    if(FestsfxOn == 1){
        festsnd.volume = Festrange.value; 
    }
    if(FestsfxOn == 0){
        festsnd.volume = 0;
    }
    if(Festrange.value == 0){
        muteFest.style.display = "none";
        downFest.style.display = "none";
        mutedFest.style.display = "inline";
    }
    if(Festrange.value > 0){
        festsnd.volume = Festrange.value;
        FestPlaying = true;
        muteFest.style.display = "inline";
        downFest.style.display = "none";
        mutedFest.style.display = "none";
        FestsfxOn = 1;
    }
    if(Festrange.value < 0.16 && Festrange.value > 0){
        muteFest.style.display = "none";
        downFest.style.display = "inline";
        mutedFest.style.display = "none";
    }
});//End Fest Effect
//Cafe Effect **************************************************************************************
var CafesfxOn = 0;
var CafePlaying = false;


muteCafe.addEventListener('click', () =>{
    Caferange.value = 0;
    return CafesfxOn = 0; 
});
downCafe.addEventListener('click', () => {
    Caferange.value = 0;
    return CafesfxOn = 0; 
});
mutedCafe.addEventListener('click', () => {
    cafesnd.volume = Caferange.value;  
    CafePlaying = true;
    Caferange.value = 0.25;
    CafesfxOn = 1;
});
const checkCafe = setInterval(() => {
    if(CafePlaying == true){
        cafesnd.play(); 
    }
    if(CafePlaying == false){
        cafesnd.volume = 0;
        muteCafe.style.display = "none";
        downCafe.style.display = "none";
        mutedCafe.style.display = "inline";
    }
});
const Cafevolume = setInterval(() => {
    if(CafesfxOn == 1){
        cafesnd.volume = Caferange.value; 
    }
    if(CafesfxOn == 0){
        cafesnd.volume = 0;
    }
    if(Caferange.value == 0){
        muteCafe.style.display = "none";
        downCafe.style.display = "none";
        mutedCafe.style.display = "inline";
    }
    if(Caferange.value > 0){
        cafesnd.volume = Caferange.value;
        CafePlaying = true;
        muteCafe.style.display = "inline";
        downCafe.style.display = "none";
        mutedCafe.style.display = "none";
        CafesfxOn = 1;
    }
    if(Caferange.value < 0.16 && Caferange.value > 0){
        muteCafe.style.display = "none";
        downCafe.style.display = "inline";
        mutedCafe.style.display = "none";
    }
});// End Cafe Effect
// Library Effect **************************************************************************************
var LibrarysfxOn = 0;
var LibraryPlaying = false;


muteLibrary.addEventListener('click', () =>{
    Libraryrange.value = 0;
    return LibrarysfxOn = 0; 
});
downLibrary.addEventListener('click', () => {
    Libraryrange.value = 0;
    return LibrarysfxOn = 0; 
});
mutedLibrary.addEventListener('click', () => {
    librarysnd.volume = Libraryrange.value;  
    LibraryPlaying = true;
    Libraryrange.value = 0.25;
    LibrarysfxOn = 1;
});
const checkLibrary = setInterval(() => {
    if(LibraryPlaying == true){
        librarysnd.play(); 
    }
    if(LibraryPlaying == false){
        librarysnd.volume = 0;
        muteLibrary.style.display = "none";
        downLibrary.style.display = "none";
        mutedLibrary.style.display = "inline";
    }
});
const Libraryvolume = setInterval(() => {
    if(LibrarysfxOn == 1){
        librarysnd.volume = Libraryrange.value; 
    }
    if(LibrarysfxOn == 0){
        librarysnd.volume = 0;
    }
    if(Libraryrange.value == 0){
        muteLibrary.style.display = "none";
        downLibrary.style.display = "none";
        mutedLibrary.style.display = "inline";
    }
    if(Libraryrange.value > 0){
        librarysnd.volume = Libraryrange.value;
        LibraryPlaying = true;
        muteLibrary.style.display = "inline";
        downLibrary.style.display = "none";
        mutedLibrary.style.display = "none";
        LibrarysfxOn = 1;
    }
    if(Libraryrange.value < 0.16 && Libraryrange.value > 0){
        muteLibrary.style.display = "none";
        downLibrary.style.display = "inline";
        mutedLibrary.style.display = "none";
    }
});// End Library Effect
// War Effect **************************************************************************************
var WarsfxOn = 0;
var WarPlaying = false;


muteWar.addEventListener('click', () =>{
    Warrange.value = 0;
    return WarsfxOn = 0; 
});
downWar.addEventListener('click', () => {
    Warrange.value = 0;
    return WarsfxOn = 0; 
});
mutedWar.addEventListener('click', () => {
    warsnd.volume = Libraryrange.value;  
    WarPlaying = true;
    Warrange.value = 0.25;
    WarsfxOn = 1;
});
const checkWar = setInterval(() => {
    if(WarPlaying == true){
        warsnd.play(); 
    }
    if(WarPlaying == false){
        warsnd.volume = 0;
        muteWar.style.display = "none";
        downWar.style.display = "none";
        mutedWar.style.display = "inline";
    }
});
const Warvolume = setInterval(() => {
    if(WarsfxOn == 1){
        warsnd.volume = Warrange.value; 
    }
    if(WarsfxOn == 0){
        warsnd.volume = 0;
    }
    if(Warrange.value == 0){
        muteWar.style.display = "none";
        downWar.style.display = "none";
        mutedWar.style.display = "inline";
    }
    if(Warrange.value > 0){
        warsnd.volume = Warrange.value;
        WarPlaying = true;
        muteWar.style.display = "inline";
        downWar.style.display = "none";
        mutedWar.style.display = "none";
        WarsfxOn = 1;
    }
    if(Warrange.value < 0.16 && Warrange.value > 0){
        muteWar.style.display = "none";
        downWar.style.display = "inline";
        mutedWar.style.display = "none";
    }
});
