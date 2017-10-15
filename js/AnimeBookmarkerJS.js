var version = "ONLINE! 1.20.32"
var defaultBG = "http://hdwallpaper.info/wp-content/uploads/bfi_thumb/cute-anime-girl-wallpaper-hd-n2nvi8veegmrtbd7crlon50iua9xrug2oklh0ntx7k.jpg";
var optfnc = "on"; var opct = 0;
var lstfnc = "on"; var lstopct = 0;

document.getElementById('options').style.opacity = 0;

document.getElementById('opensitesbtn').onload = fncBeep();

//OPEN AND CLOSE OPTIONS ######################################################################################################################	

function OCoptions(){
	if(optfnc === "on"){
		optfnc = "off";
		var sitn2 = setInterval(itn, 100);

  function itn() {
    if (opct >= 1) {
      clearInterval(sitn2);
	  opct = 1;

    } else {
      opct = opct + 0.1;
  document.getElementById('options').style.opacity = opct;
    }
  }
  
  
  
} else {
	optfnc = "on";
		var sitn2 = setInterval(itn2, 100);
		
  function itn2() {
    if (opct <= 0) {
      clearInterval(sitn2);
	  opct = 0;

	  } else {
      opct = opct - 0.1;
  document.getElementById('options').style.opacity = opct;
    }
  }
}
}

function openList(){
	if(document.getElementById('clList').innerHTML === 'Open list'){
		document.getElementById('clList').innerHTML = 'Close list';
		}else{
		document.getElementById('clList').innerHTML = 'Open list';
	}
	
	if(lstfnc === "on"){
	lstfnc = "off";
		var sitn2 = setInterval(itn2, 100);

  function itn2() {
    if (lstopct >= 1) {
      clearInterval(sitn2);
	  lstopct = 1;

    } else {
      lstopct = lstopct + 0.1;
  document.getElementById('animeList').style.opacity = lstopct;
    }
  }
  
  
  
} else {
	lstfnc = "on";
		var sitn2 = setInterval(itn3, 100);
		
  function itn3() {
    if (lstopct <= 0) {
      clearInterval(sitn2);
	  lstopct = 0;

	  } else {
      lstopct = lstopct - 0.1;
  document.getElementById('animeList').style.opacity = lstopct;
    }
  }
}
}
	
	
	
	
/*var x = document.getElementById('animeList');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }*/


//CHANGE BACKGROUND  #########################################################################################################################
function mudarBGfnc(){
if(document.getElementById("mudarBG").value !== ""){
document.body.style.backgroundImage = "url('"+document.getElementById("mudarBG").value+"')";       //change background
localStorage.bg = document.getElementById("mudarBG").value;              			               //change localStorage.bg
document.getElementById("mudarBG").value = "";					               //set input value = blank

}else{
document.getElementById("mudarBG").value = "";
}
}

document.getElementById("mudarBG")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("mudarBG2").click();
    }
});

function setDefaultBG(){
document.body.style.backgroundImage = "url('"+defaultBG+"')";       //change background
localStorage.bg = defaultBG;         
}

function loadBG(){
if(localStorage.bg !== undefined){
document.body.style.backgroundImage = "url('"+localStorage.bg+"')";

}else{
localStorage.bg = defaultBG;
}
}

//OPEN SITES ####################################################################################################################################
function fncBeep(){
document.getElementById("beep").play();
document.getElementById("download").innerHTML = " "+version;

loadBG();
animeListFnc();
setTimeout( function() {
favicontitle();
}, 3000);
}

function favicontitle(){
	setInterval( function(){
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'http://vignette3.wikia.nocookie.net/blazblue/images/5/5c/Litchi_Faye-Ling_%28Centralfiction%2C_Character_Select_Artwork%29.png/revision/latest?cb=20161019133246';
    document.getElementsByTagName('head')[0].appendChild(link);	


document.title = "Animes BookMarker";
	}, 1);
}

function animeListFnc(){
	setTimeout( function(){
document.getElementById('animeList').style.opacity = 0;
	}, 3000);
}

function abrirAnimes(){
document.getElementById("beep").play();
document.getElementById("defaultName").click();

var opn = 2;
while (opn-2 < namearr.length){
document.getElementById("createdName"+opn).click();
opn++;
}


window.close();
}