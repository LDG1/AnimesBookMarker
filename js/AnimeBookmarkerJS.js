var version = "ONLINE! 1.19.74"
var defaultBG = "http://hdwallpaper.info/wp-content/uploads/bfi_thumb/cute-anime-girl-wallpaper-hd-n2nvi8veegmrtbd7crlon50iua9xrug2oklh0ntx7k.jpg";

document.getElementById('options').style.display = "none";
document.getElementById('opensitesbtn').onload = fncBeep();

//OPEN AND CLOSE OPTIONS ######################################################################################################################
function OCoptions(){
var x = document.getElementById('options');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function openList(){
var x = document.getElementById('animeList');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

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
document.getElementById('animeList').style.display = "none";
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