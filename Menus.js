SoundSetbtn = document.getElementById("Soundbtn");
var PlayerDisp = 0;

Settingbtn = document.getElementById("Setttingbtn");
CloseSetting = document.getElementById("close");

/*Butonlar ve menüler*/

SoundButtonCont = document.getElementById("SoundBtnCont");
SettingButtonCont = document.getElementById("SettingBtnCont");

SettingMenu = document.getElementById("setting");  


/***********************Setting Variables***********************/
//Arka plan tuşlarını değiştirmek için oklar
RightArrow = document.getElementById('ThemeArrowRight');
LeftArrow = document.getElementById('ThemeArrowLeft');  
//Font değiştirme menüsü
const fontSelector = document.getElementById('fontSelector');
//Arka plan değiştirme tuşları
BgButton_one = document.getElementById('BGImage_one');
BgButton_two = document.getElementById('BGImage_two');
BgButton_three = document.getElementById('BGImage_three');
BgButton_four = document.getElementById('BGImage_four');
//Arka planlar
Cloubg = document.getElementById('Cloud_bg');
Splashbg = document.getElementById('Splash_bg');
Darkcloudbg = document.getElementById('Darkcloud_bg');
CozyShopbg = document.getElementById('CozyShop_bg');

Citybg = document.getElementById('City_bg');
CityRoadbg = document.getElementById('CityRoad_bg');
TrolleyStopbg = document.getElementById('TrolleyStop_bg');
Windowcitybg = document.getElementById('WindowCity_bg');

CozyBookbg = document.getElementById('CozyBook_bg');
CozyRoombg = document.getElementById('CozyRoom_bg');
CozyBookRoombg = document.getElementById('CozyBookRoom_bg');
OldLibrarybg = document.getElementById('OldLibrary_bg');

GhibliHousebg = document.getElementById('GhibliHouse_bg');
GhibliCastlebg = document.getElementById('GhibliCastle_bg');
GhibliPaintbg = document.getElementById('GhibliPaint_bg');
GhibliSeabg = document.getElementById('GhibliSea_bg');




var Menutype = 0 //Background değiştirme tuşlarının sekmesini ayarlama
var ThemeType = 0 // Arka plan değiştirince temayı değiştirme


SoundSetbtn.addEventListener('click', () => {
   if(PlayerDisp == 0){
    //document.getElementById("music-cont").style.display = "inline";
    document.getElementById("Player-Cont").style.display = "inline";
    return PlayerDisp = 1;
    }
    if(PlayerDisp == 1){
    //document.getElementById("music-cont").style.display = "none";
    document.getElementById("Player-Cont").style.display = "none";
    return PlayerDisp = 0;
    }
 }); 
 Settingbtn.addEventListener('click', () => {
  SettingMenu.style.display = "inline";  
  RightArrow.style.display = "inline-block";//Oklar Settings'in dışında olduğu için ayrıca işlem yapılıyor
  LeftArrow.style.display = "inline-block";//Oklar Settings'in dışında olduğu için ayrıca işlem yapılıyor
 });
 CloseSetting.addEventListener('click', () => {
  SettingMenu.style.display = "none";    
  RightArrow.style.display = "none";//
  LeftArrow.style.display = "none";//
 });



 window.addEventListener('keydown', function(e){
  /*Close Menus With Escape*/
  if(e.key == "Escape"){
    e.preventDefault();
    document.getElementById("setting").style.display = "none";   
    RightArrow.style.display = "none";//  
    LeftArrow.style.display = "none";//
    document.getElementById("Player-Cont").style.display = "none";
  }
  /**Full Screen With "F" */
  if(e.key == "f"){
    e.preventDefault();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      fullscreenBtn.innerHTML = "fullscreen_exit";
    } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreenBtn.innerHTML = "fullscreen";
      }
    }
  }
  /**Visibility With "V" */
  if(e.key == "v"){
    if(MenuVisibility){
   
      document.querySelector('.refreshbtn-cont').classList.add('hidden');
      document.querySelector('.settingbtn-cont').classList.add('hidden');
      document.querySelector('.soundbtn-cont').classList.add('hidden');
      document.getElementById('timer-starter').classList.add('hidden');
      bmcContainer.style.display = 'none';
  
      MenuVisibility = false;
      VisibilityBtn.innerHTML = "visibility";
    }
    else{    
      document.querySelector('.refreshbtn-cont').classList.remove('hidden');
      document.querySelector('.settingbtn-cont').classList.remove('hidden');
      document.querySelector('.soundbtn-cont').classList.remove('hidden');
      document.getElementById('timer-starter').classList.remove('hidden');
      bmcContainer.style.display = 'inline';
  
  
      VisibilityBtn.innerHTML = "visibility_off";
      MenuVisibility = true;
    }
  }
});


 /*Setting Menu*/

  //Menü sekmesini değiştirmek için ayarlama                Mor(0) => Siyah(1) => Kahverengi(2)
  RightArrow.addEventListener('click', () => {
    if(Menutype == 0){ 
      Menutype = 1;
    }else if(Menutype == 1){
      Menutype = 2;
    }else if(Menutype == 2){
      Menutype = 3;
    }else
      Menutype = 0;

    ChangeMenu();
  });
  LeftArrow.addEventListener('click', () => {
    if(Menutype == 0){ 
      Menutype = 3;
    }else if(Menutype == 2){
      Menutype = 1;
    }else if(Menutype == 3){
      Menutype = 2;
    }else
      Menutype = 0;
    ChangeMenu();
  });


/**Q E TUŞLARI İLE ARKA PLAN DEĞİŞTİRME *//*
// Önceki değerleri saklamak için bir değişken
let previousValue = null;
// Rastgele değer üreten ve öncekiyle aynı olmadığını garanti eden fonksiyon
function getRandomExcludingPrevious(max) {
  let newValue;
  do {
    newValue = Math.floor(Math.random() * max);
  } while (newValue === previousValue); // Aynı değeri alana kadar döngü
  previousValue = newValue; // Yeni değeri sakla
  return newValue;
}
window.addEventListener('keydown', (e) => {
    if (e.key === "e") { // 
      RandomDisplay();
    }
});
function RandomDisplay(){
  NoneAllDisplays();
      
  // Rastgele bir değer al (0-6 arası)
  const randChange = getRandomExcludingPrevious(8);

  // Tüm arka planları ve temaları bir dizi olarak tanımla
  const backgrounds = [
    { element: CozyRoombg, theme: 3 },
    { element: OldLibrary_bg, theme: 3 },
    { element: CityRoadbg, theme: 1 },
    { element: CozyBookbg, theme: 3 },
    { element: CozyBookRoombg, theme: 3 },
    { element: TrolleyStopbg, theme: 1 },
    { element: CozyShopbg, theme: 0 },
    { element: Windowcitybg, theme: 1}
  ];

  // Seçilen rastgele değer üzerinden işlemleri uygula
  const selectedBackground = backgrounds[randChange];
  selectedBackground.element.style.display = "inline";
  ThemeType = selectedBackground.theme;

  // Temayı değiştir
  ChangeTheme();
}
/****************************************************************************/



function ChangeMenu(){
  if(Menutype == 0){
    //Ayar menüsündeki butonların üstündeki fotoğrafları değiştirme, sekme atlatma da denilebilir
    BgButton_one.style.backgroundImage = "url('Images/Backgrounds/SwingBg.jpg')";
    BgButton_two.style.backgroundImage = "url('Images/Backgrounds/CozyShop.jpeg')";
    BgButton_three.style.backgroundImage = "url('Images/Backgrounds/VillageBg.jpg')";
    BgButton_four.style.backgroundImage = "url('Images/Backgrounds/SkyCloudy.jpg')";
  }
  else if(Menutype == 1){
    BgButton_one.style.backgroundImage = "url('Images/Backgrounds/City.jpg')";
    BgButton_two.style.backgroundImage = "url('Images/Backgrounds/WindowCity.jpg')";
    BgButton_three.style.backgroundImage = "url('Images/Backgrounds/TrolleyStop.jpg')";
    BgButton_four.style.backgroundImage = "url('Images/Backgrounds/CityRoad.jpg')";
  }
  else if(Menutype == 2){
    BgButton_one.style.backgroundImage = "url('Images/Backgrounds/Cozybookbg.png')";
    BgButton_two.style.backgroundImage = "url('Images/Backgrounds/Cozyroombg.jpg')"
    BgButton_three.style.backgroundImage = "url('Images/Backgrounds/cozybookroombg.jpg')";
    BgButton_four.style.backgroundImage = "url('Images/Backgrounds/oldlibrarybg.jpg')";
  }
  else if(Menutype == 3){
    BgButton_one.style.backgroundImage = "url('Images/Backgrounds/Ghibli_House.png')";
    BgButton_two.style.backgroundImage = "url('Images/Backgrounds/Ghibli_Castle.jpg')";
    BgButton_three.style.backgroundImage = "url('Images/Backgrounds/Ghibli_Paint.jpg')";
    BgButton_four.style.backgroundImage = "url('Images/Backgrounds/Ghibli_Sea.jpg')";
  }
}

//Tema değiştirme fonksiyonu *************************************************************************************
function ChangeTheme(){
  if(ThemeType == 0){
    startbtn.style.border = "1px solid rgb(78, 19, 102)";
    SoundButtonCont.style.border = "1px solid rgb(78, 19, 102)";
    SettingButtonCont.style.border = "1px solid rgb(78, 19, 102)";

    document.getElementById('timer-starter').classList.remove('browntheme','ghiblitheme','citytheme');
    document.getElementById('timer-starter').classList.add('purpletheme');

    SoundButtonCont.addEventListener('mouseover', () => {
      SoundButtonCont.style.backgroundColor =  "rgba(65, 16, 108, 0.8)";
    });
    SoundButtonCont.addEventListener('mouseout', () => {
      SoundButtonCont.style.background =  "none";
    });
    SettingButtonCont.addEventListener('mouseover', () => {
      SettingButtonCont.style.backgroundColor =  "rgba(65, 16, 108, 0.8)";
    });
    SettingButtonCont.addEventListener('mouseout', () => {
      SettingButtonCont.style.background =  "none";
    });
    SettingMenu.style.backgroundColor = "rgba(65, 16, 108, 0.85)";
    SettingMenu.style.boxShadow = " 0px 0px 40px rgba(138, 0, 193, 0.534)";
    SettingMenu.style.boxShadow = "inset 0 0 20px rgba(44, 0, 61, 0.534)"; 
    PomodoroTime.style.backgroundColor = "#480051";
    BreakTime.style.backgroundColor = "#480051";
    fontSelector.style.backgroundColor = "#480051";
    FontSizeInput.style.backgroundColor = "#480051";
    CheckerState.style.background = "rgb(126, 10, 147)";
    ContinState.style.background = "rgb(126, 10, 147)";
    SoundState.style.background = "rgb(126, 10, 147)"
    TimerVisualCheck.style.background = "rgb(126, 10, 147)";
    TimeFew.style.background = "rgb(126, 10, 147)";
    NotificationCheck.style.background = "rgb(126, 10, 147)";
    TimeFew.style.backgroundColor = "#480051";
    BgButton_one.style.border="3px solid rgba(117, 20, 130, 0.963)";
    BgButton_two.style.border="3px solid rgba(117, 20, 130, 0.963)";
    BgButton_three.style.border="3px solid rgba(117, 20, 130, 0.963)";
    BgButton_four.style.border="3px solid rgba(117, 20, 130, 0.963)";
    document.getElementById("Player-Cont").style.backgroundColor = "rgba(61, 15, 102, 0.85)";
    document.getElementById("sound-cont").style.backgroundColor = "rgba(44, 10, 74, 0.85)";
    document.querySelectorAll('.sound_player-cont input[type="range"]').forEach(input => {
      //Ses oynatıcıdaki bütün input arka planlarını değiştirme
      input.style.backgroundColor = '#44146b';
    })
  }//.....................................................................//
  else if(ThemeType == 1){
      startbtn.style.border = "1px solid rgba(42, 42, 43, 0.89)";
      SoundButtonCont.style.border = "1px solid rgba(42, 42, 43, 0.89)";
      SettingButtonCont.style.border = "1px solid rgba(42, 42, 43, 0.89)";

      document.getElementById('timer-starter').classList.remove('browntheme','ghiblitheme','purpletheme');
      document.getElementById('timer-starter').classList.add('citytheme');

      SoundButtonCont.addEventListener('mouseover', () => {
        SoundButtonCont.style.backgroundColor =  "rgba(27, 27, 27, 0.89)";
      });
      SoundButtonCont.addEventListener('mouseout', () => {
        SoundButtonCont.style.background =  "none";
      });
      SettingButtonCont.addEventListener('mouseover', () => {
        SettingButtonCont.style.backgroundColor =  "rgba(27, 27, 27, 0.89)";
      });
      SettingButtonCont.addEventListener('mouseout', () => {
        SettingButtonCont.style.background =  "none";
      });
      SettingMenu.style.backgroundColor = "rgba(11, 11, 11, 0.89)";
      SettingMenu.style.boxShadow = "0px 0px 40px rgb(0, 0, 0)";
      SettingMenu.style.boxShadow = "inset 0 0 10px rgba(58, 58, 58, 0.534)"; 
      PomodoroTime.style.backgroundColor = "#2a2a2a";
      BreakTime.style.backgroundColor = "#2a2a2a";
      fontSelector.style.backgroundColor = "#2a2a2a"
      FontSizeInput.style.backgroundColor = "#2a2a2a";
      CheckerState.style.background = "rgb(32, 32, 32)";
      ContinState.style.background = "rgb(32, 32, 32)";
      SoundState.style.background = "rgb(32, 32, 32)";
      TimerVisualCheck.style.background = "rgb(32, 32, 32)";
      TimeFew.style.background = "rgb(32, 32, 32)";
      NotificationCheck.style.background = "rgb(32, 32, 32)";
      TimeFew.style.backgroundColor = "#2a2a2a";
      BgButton_one.style.border = "3px solid rgba(45, 45, 45, 0.963)";
      BgButton_two.style.border = "3px solid rgba(45, 45, 45, 0.963)";
      BgButton_three.style.border = "3px solid rgba(45, 45, 45, 0.963)";
      BgButton_four.style.border = "3px solid rgba(45, 45, 45, 0.963)";
      document.getElementById("Player-Cont").style.backgroundColor = "rgba(20, 20, 20, 0.9)";
      document.getElementById("sound-cont").style.backgroundColor = "rgba(10, 10, 10, 0.9)";
      document.querySelectorAll('.sound_player-cont input[type="range"]').forEach(input => {
         //Ses oynatıcıdaki bütün input arka planlarını değiştirme
        input.style.backgroundColor = '#040404';
      })
  }//.....................................................................//
  else if(ThemeType == 3){
      startbtn.style.border = "1px solid rgba(160, 110, 80, 1)";
      SoundButtonCont.style.border = "1px solid rgba(160, 110, 80, 1)";
      SettingButtonCont.style.border = "1px solid rgba(160, 110, 80, 1)";
      document.getElementById('timer-starter').classList.remove('ghiblitheme','citytheme','purpletheme');
      document.getElementById('timer-starter').classList.add('browntheme');

      /*startbtn.addEventListener('mouseover', () => {
        startbtn.style.backgroundColor =  "rgb(111, 74, 51)";
      });
      startbtn.addEventListener('mouseout', () => {
        startbtn.style.background =  "none";
      });*/
      SoundButtonCont.addEventListener('mouseover', () => {
        SoundButtonCont.style.backgroundColor =  "rgb(111, 74, 51)";
      });
      SoundButtonCont.addEventListener('mouseout', () => {
        SoundButtonCont.style.background =  "none";
      });
      SettingButtonCont.addEventListener('mouseover', () => {
        SettingButtonCont.style.backgroundColor =  "rgb(111, 74, 51)";
      });
      SettingButtonCont.addEventListener('mouseout', () => {
        SettingButtonCont.style.background =  "none";
      });
      SettingMenu.style.backgroundColor = "rgba(93, 64, 55, 0.8)";
      SettingMenu.style.boxShadow = "0px 0px 40px rgb(0, 0, 0)";
      SettingMenu.style.boxShadow = "inset 0 0 10px rgba(58, 58, 58, 0.534)"; 
      PomodoroTime.style.backgroundColor = "rgba(160, 110, 80, 1)";
      BreakTime.style.backgroundColor = "rgba(160, 110, 80, 1)";
      fontSelector.style.backgroundColor = "rgba(160, 110, 80, 1)"
      FontSizeInput.style.backgroundColor = "rgba(160, 110, 80, 1)";
      CheckerState.style.background = "rgba(160, 110, 80, 1)";
      ContinState.style.background = "rgba(160, 110, 80, 1)";
      SoundState.style.background = "rgba(160, 110, 80, 1)";
      TimerVisualCheck.style.background = "rgba(160, 110, 80, 1)";
      TimeFew.style.background = "rgba(160, 110, 80, 1)";     
      NotificationCheck.style.background = "rgba(160, 110, 80, 1)";
      TimeFew.style.backgroundColor = "rgba(160, 110, 80, 1)";
      BgButton_one.style.border = "3px solid rgba(160, 110, 80, 1)";
      BgButton_two.style.border = "3px solid rgba(160, 110, 80, 1)";
      BgButton_three.style.border = "3px solid rgba(160, 110, 80, 1)";
      BgButton_four.style.border = "3px solid rgba(160, 110, 80, 1)";
      document.getElementById("Player-Cont").style.backgroundColor = "rgba(93, 64, 55, 0.8)";
      document.getElementById("sound-cont").style.backgroundColor = "rgba(77, 53, 45, 0.9)";
      document.querySelectorAll('.sound_player-cont input[type="range"]').forEach(input => {
         //Ses oynatıcıdaki bütün input arka planlarını değiştirme
        input.style.backgroundColor = 'rgb(57, 37, 30)';
      })
  }//.....................................................................//
  else if(ThemeType == 4){
    startbtn.style.border = "1px solid rgba(157, 191, 158, 1)";
    SoundButtonCont.style.border = "1px solid rgba(157, 191, 158, 1)";
    SettingButtonCont.style.border = "1px solid rgba(157, 191, 158, 1)";
    //document.querySelector('.refreshbtn-cont').classList.add('hidden');
    //document.querySelector('.settingbtn-cont').classList.add('hidden');
    //document.querySelector('.soundbtn-cont').classList.add('hidden');
    document.getElementById('timer-starter').classList.remove('browntheme','citytheme','purpletheme');
    document.getElementById('timer-starter').classList.add('ghiblitheme');
    /*startbtn.addEventListener('mouseover', () => {
      //startbtn.style.backgroundColor =  "rgb(157, 191, 158)";
      startbtn.classList.add('ghiblitheme');
    });
    startbtn.addEventListener('mouseout', () => {
      startbtn.classList.add('nonebackground');
      //startbtn.style.background =  "none";
    });*/
    SoundButtonCont.addEventListener('mouseover', () => {
      SoundButtonCont.style.backgroundColor =  "rgb(157, 191, 158)";
    });
    SoundButtonCont.addEventListener('mouseout', () => {
      SoundButtonCont.style.background =  "none";
    });
    SettingButtonCont.addEventListener('mouseover', () => {
      SettingButtonCont.style.backgroundColor =  "rgb(157, 191, 158)";
    });
    SettingButtonCont.addEventListener('mouseout', () => {
      SettingButtonCont.style.background =  "none";
    });
    SettingMenu.style.backgroundColor = "rgba(157, 191, 158, 0.82)";
    SettingMenu.style.boxShadow = "0px 0px 40px rgb(255, 255, 255)";
    SettingMenu.style.boxShadow = "inset 0 0 10px rgba(157, 157, 157, 0.6)"; 
    PomodoroTime.style.backgroundColor = "#183D3D";
    BreakTime.style.backgroundColor = "#183D3D";
    fontSelector.style.backgroundColor = "#183D3D";
    FontSizeInput.style.backgroundColor = "#183D3D";
    CheckerState.style.background = "#183D3D";
    ContinState.style.background = "#183D3D";
    SoundState.style.background = "#183D3D";
    TimerVisualCheck.style.background = "#183D3D";
    TimeFew.style.background = "#183D3D";     
    NotificationCheck.style.background = "#183D3D";
    TimeFew.style.backgroundColor = "#183D3D";
    BgButton_one.style.border = "3px solid #183D3D";
    BgButton_two.style.border = "3px solid #183D3D";
    BgButton_three.style.border = "3px solid #183D3D";
    BgButton_four.style.border = "3px solid #183D3D";
    document.getElementById("Player-Cont").style.backgroundColor = "rgba(157, 191, 158, 0.8)";
    document.getElementById("sound-cont").style.backgroundColor = "rgba(106, 134, 107, 0.9)";
    document.querySelectorAll('.sound_player-cont input[type="range"]').forEach(input => {
       //Ses oynatıcıdaki bütün input arka planlarını değiştirme
      input.style.backgroundColor = 'rgb(157, 191, 158)';
    })
  }
  else
      return ThemeType = 1;
}
/*********************************************************************************************************************/

/*********************************Arka Plan Değiştirme****************************************************************/
  function NoneAllDisplays(){
    Cloud_bg.style.display = "none";
    Splashbg.style.display = "none";
    CozyShopbg.style.display = "none";
    Darkcloudbg.style.display = "none";
    Citybg.style.display = "none";
    CityRoadbg.style.display = "none";
    TrolleyStopbg.style.display= "none";
    Windowcitybg.style.display= "none";
    CozyBookbg.style.display = "none";
    CozyRoombg.style.display = "none";
    CozyBookRoombg.style.display = "none";
    OldLibrarybg.style.display = "none";
    GhibliHousebg.style.display = "none"; 
    GhibliCastlebg.style.display = "none";
    GhibliPaintbg.style.display = "none"; 
    GhibliSeabg.style.display = "none"; 
  }

  BgButton_one.addEventListener('click', () => {
    NoneAllDisplays();    
    if(Menutype == 0){
    Cloud_bg.style.display = "inline";
    ThemeType = 0;
    }
    else if(Menutype == 1){
      Citybg.style.display = "inline";
      ThemeType = 1;
    }
    else if(Menutype == 2){
      CozyBookbg.style.display = "inline";
      ThemeType = 3;
    }
    else if(Menutype == 3){
      GhibliHousebg.style.display = "inline";
      ThemeType = 4;
    }
    ChangeTheme();
  });
  BgButton_two.addEventListener('click', () => {
    NoneAllDisplays();    
    if(Menutype == 0){
    CozyShopbg.style.display = "inline";
    ThemeType = 0;
    }
    else if(Menutype == 1){
      Windowcitybg.style.display = "inline";
      ThemeType = 1;
    }
    else if(Menutype == 2){
      CozyRoombg.style.display = "inline";
      ThemeType = 3;
    }
    else if(Menutype == 3){
      GhibliCastlebg.style.display = "inline";
      ThemeType = 4;
    }
    ChangeTheme();
  });
  BgButton_three.addEventListener('click', () => {
    NoneAllDisplays();    
    if(Menutype == 0){
    Splashbg.style.display = "inline";
    ThemeType = 0;
    }
    else if(Menutype == 1){ 
      TrolleyStopbg.style.display = "inline";
      ThemeType = 1;
    }
    else if(Menutype == 2){
      CozyBookRoombg.style.display = "inline";
      ThemeType = 3;
    }
    else if(Menutype == 3){
      GhibliPaintbg.style.display = "inline";
      ThemeType = 4;
    }
    ChangeTheme();
  });
  BgButton_four.addEventListener('click', () => {
    NoneAllDisplays();    
    if(Menutype == 0){
    Darkcloudbg.style.display = "inline";
    ThemeType = 0;
    }
    else if(Menutype == 1){
      CityRoadbg.style.display = "inline";
      ThemeType = 1;
    }
    else if(Menutype == 2){
      OldLibrary_bg.style.display = "inline";
      ThemeType = 3;  
    }
    else if(Menutype == 3){
      GhibliSeabg.style.display = "inline";
      ThemeType = 4;
    }
    ChangeTheme();
  }); 
/****************************************Zamanlayıcının Fontunu Değiştirme************************************/
fontSelector.addEventListener('change', (event) => {  
  //document.body.style.fontFamily = event.target.value;
  timernumb.style.fontFamily = event.target.value;
  
});
/****************************************Zamanlayıcının Font Büyüklüğünü Değiştirme**************************/
const FontSizeInput = document.getElementById('fontsizeInp');

timernumb.style.fontSize = FontSizeInput.value  + "px";
//timernumb.style.transform = "translateY("+translateVal+"%"+")";
FontSizeInput.addEventListener('input', () => {
  if(FontSizeInput.value > 0 && FontSizeInput.value <= 200){
    timernumb.style.fontSize = FontSizeInput.value  + "px";

    if(FontSizeInput.value <= 155){
      timernumb.style.transform = "translateY("+(65)+"%"+")";
    }
    if(FontSizeInput.value > 155){
      timernumb.style.transform = "translateY("+(61)+"%"+")";
    }
    if(FontSizeInput.value > 163 && FontSizeInput.value <= 174){
      timernumb.style.transform = "translateY("+(59)+"%"+")";
    }
    if(FontSizeInput.value > 174){
      timernumb.style.transform = "translateY("+(55)+"%"+")";
    }
    if(FontSizeInput.value > 184){
      timernumb.style.transform = "translateY("+(51)+"%"+")";
    }
    if(FontSizeInput.value > 194){
      timernumb.style.transform = "translateY("+(47)+"%"+")";
    }
    if(FontSizeInput.value == 200){
      timernumb.style.transform = "translateY("+(35)+"%"+")";
    }
    //console.log(translateVal - FontSizeInput.value / 5);

  }
});







/********************************************************************************************************/

/*******Ful Screen/*******/

const fullscreenBtn = document.querySelector('.screen_button');
const VisibilityBtn = document.getElementById('VisibilityIcon');
let hideTimeout; // Gizleme için zamanlayıcı tanımlıyoruz
let MenuVisibility = true;

document.addEventListener('mousemove', () => {
  // Butonu görünür yap
  fullscreenBtn.classList.remove('hidden');
  VisibilityBtn.classList.remove('hidden');
  bmcContainer.classList.remove('hidden');

  // Önceki zamanlayıcı varsa temizle
  clearTimeout(hideTimeout);

  // 3 saniye sonra butonu gizle
  hideTimeout = setTimeout(() => {
      fullscreenBtn.classList.add('hidden');
      VisibilityBtn.classList.add('hidden');
      bmcContainer.classList.add('hidden');
  }, 1500);
});

// Tam ekran butonuna tıklama ile tam ekran modu aç/kapat
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      fullscreenBtn.innerHTML = "fullscreen_exit";
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreenBtn.innerHTML = "fullscreen";
      }
  }
});
/*******Menu Visibility*******/
VisibilityBtn.addEventListener('click', () => {
  if(MenuVisibility){
   
    document.querySelector('.refreshbtn-cont').classList.add('hidden');
    document.querySelector('.settingbtn-cont').classList.add('hidden');
    document.querySelector('.soundbtn-cont').classList.add('hidden');
    document.getElementById('timer-starter').classList.add('hidden');
    bmcContainer.style.display = 'none';

    MenuVisibility = false;
    VisibilityBtn.innerHTML = "visibility";
  }
  else{    
    document.querySelector('.refreshbtn-cont').classList.remove('hidden');
    document.querySelector('.settingbtn-cont').classList.remove('hidden');
    document.querySelector('.soundbtn-cont').classList.remove('hidden');
    document.getElementById('timer-starter').classList.remove('hidden');
    bmcContainer.style.display = 'inline';


    VisibilityBtn.innerHTML = "visibility_off";
    MenuVisibility = true;
  }
});

/*******************************************************************************************************/
/****************Buy me a coffe tuşu****************/
// Kapatma düğmesini seçiyoruz
const closeBtn = document.getElementById('close-bmc-btn');

// Buy Me a Coffee container'ını seçiyoruz
const bmcContainer = document.getElementById('bmc-container');

// Kapatma düğmesine tıklanınca butonu gizliyoruz
closeBtn.addEventListener('click', () => {
    bmcContainer.remove(); // Buton ve içeriği DOM'dan tamamen kaldırılır
});

/*******************************************************************************************************/
/**Başlangıçta Rastgele Arka Plan Seçme */
function ChangeBgOnStart(){
  var BackgroundNumb = Math.floor(Math.random() * 8);
  console.log(BackgroundNumb);
  if(BackgroundNumb == 0 || BackgroundNumb == 7){
    GhibliPaintbg.style.display = "inline";
    ThemeType = 4;
    Menutype = 3;
    ChangeTheme();
    ChangeMenu();
  }
  else if(BackgroundNumb == 1){
    CozyShopbg.style.display = "inline";
    ThemeType = 0;
    Menutype = 0;
    ChangeTheme();
    ChangeMenu();
  }
  else if(BackgroundNumb == 2 || BackgroundNumb == 6){
    GhibliSeabg.style.display = "inline";
    ThemeType = 4;
    Menutype = 3;
    ChangeTheme();
    ChangeMenu();
  }
  else if(BackgroundNumb == 3){
    CozyBookRoombg.style.display = "inline";
    ThemeType = 3;
    Menutype = 2;
    ChangeTheme();
    ChangeMenu();
  }
  else if(BackgroundNumb == 4){
    CozyRoombg.style.display = "inline";
    ThemeType = 3;
    Menutype = 2;
    ChangeTheme();
    ChangeMenu();
  }
  else if(BackgroundNumb == 5){
    TrolleyStopbg.style.display = "inline";
    ThemeType = 1;
    Menutype = 1;
    ChangeTheme();
    ChangeMenu();
  }

}
ChangeBgOnStart();
