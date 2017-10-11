var rowNumber = 0;
var trCount = 1;
var linkarr = [];
var namearr = [];
var i = 0;

document.getElementById("block").onload = loadfnc();


function loadfnc(){
if(localStorage.din !== undefined || localStorage.dli !== undefined){//name and input
document.getElementById("defaultName").innerHTML = localStorage.din;
document.getElementById("defaultName").href = localStorage.dli;

}else{
localStorage.din = "Anime Name";
localStorage.dli = "https://sites.google.com/view/nannan-senpai/";
}//name and input


if(localStorage.linkarr !== undefined || localStorage.namearr !== undefined){ //name and link saver
linkarr = JSON.parse(localStorage["linkarr"]);
namearr = JSON.parse(localStorage["namearr"]);

}else{
localStorage.linkarr = linkarr;
localStorage.namearr = namearr;
} //name and link saver

while (i < linkarr.length){
rowNumber ++;
trCount ++;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
	row.id = "createdRow"+trCount;
	var rr = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var c = row.insertCell(3);
    var d = row.insertCell(4);
	d.id = "createdCell"+trCount;
	rr.align = "center"; cell1.align = "center"; cell2.align = "center"; c.align = "center"; d .align = "center";
    
	rr.innerHTML = trCount;
    
    cell2.innerHTML = '<button class="pmbtn" id="createdMinusButton'+trCount+'" onclick="createdMinusfnc(this.id)">&#8722;</button><font id="createdNumber'+trCount+'"> 0 </font><button class="pmbtn" id="createdPlusButton'+trCount+'" onclick="createdPlusfnc(this.id)">+</button>';
    
    c.innerHTML = '<input class="inputclass" id="createdInputLink'+trCount+'" placeholder="link here"> <button id="createdSubmitButton'+trCount+'" class="submitbtn" onclick="createdSubmitfnc(this.id)">submit</button>';
    
    d.innerHTML = '<button class="closebtn" id="createdCloseButton'+trCount+'" onclick="createdClosefnc(this.id)" style="background-color: red;"> &#8722 </button>';
	
	
    cell1.innerHTML = '<a class="nameclass" id="createdName'+trCount+'" href="'+linkarr[i]+'" target="_blank">'+namearr[i]+'</a><br><input id="createdInputName'+trCount+'" class="inputclass" placeholder="name here">';

i++;
}

if(localStorage.dep !== "undefined"){//episode
document.getElementById("defaultEpisode").innerHTML = localStorage.dep;
}else{
localStorage.dep = 0;
}//episode
}

function openallq(){
document.getElementById("defaultName").click();

var opn = 2;
while (opn-2 < namearr.length){
document.getElementById("createdName"+opn).click();
opn++;
}
}


/////////////////////////////////////////////////////////////////////DEFAULT EPISODE FUNCTIONS
function defaultMinus(){
document.getElementById("defaultEpisode").innerHTML --;
localStorage.dep = document.getElementById("defaultEpisode").innerHTML;
}

function defaultPlus(){
document.getElementById("defaultEpisode").innerHTML ++;
localStorage.dep = document.getElementById("defaultEpisode").innerHTML;
}
/////////////////////////////////////////////////////////////////////DEFAULT EPISODE FUNCTIONS
/////////////////////////////////////////////////////////////////////DEFAULT NAME-LINK FUNCTIONS
function defaultSubmit(){
if(document.getElementById("defaultInputName").value !== "" || document.getElementById("defaultLinkInput").value !== ""){
document.getElementById("defaultName").innerHTML = document.getElementById("defaultInputName").value.toUpperCase();
document.getElementById("defaultName").href = document.getElementById("defaultLinkInput").value;
localStorage.din = document.getElementById("defaultName").innerHTML;
localStorage.dli = document.getElementById("defaultLinkInput").value;

 document.getElementById("defaultLinkInput").value = "";
  document.getElementById("defaultInputName").value = "";
}
}
/////////////////////////////////////////////////////////////////////DEFAULT NAME-LINK FUNCTIONS

function myCreateFunction() {
rowNumber ++;
trCount ++;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
	row.id = "createdRow"+trCount;
	var rr = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var c = row.insertCell(3);
    var d = row.insertCell(4);
	d.id = "createdCell"+trCount;
	rr.align = "center"; cell1.align = "center"; cell2.align = "center"; c.align = "center"; d .align = "center";
    
	rr.innerHTML = trCount;
	
    cell1.innerHTML = '<a class="nameclass" id="createdName'+trCount+'" href="https://sites.google.com/view/nannan-senpai/" target="_blank">ANIME NAME</a><br><input class="inputclass" id="createdInputName'+trCount+'" placeholder="name here">';
    
    cell2.innerHTML = '<button class="pmbtn" id="createdMinusButton'+trCount+'" onclick="createdMinusfnc(this.id)">&#8722;</button><font id="createdNumber'+trCount+'"> 0 </font><button class="pmbtn" id="createdPlusButton'+trCount+'" onclick="createdPlusfnc(this.id)">+</button>';
    
    c.innerHTML = '<input class="inputclass" id="createdInputLink'+trCount+'" placeholder="link here"> <button id="createdSubmitButton'+trCount+'" class="submitbtn" onclick="createdSubmitfnc(this.id)">submit</button>';
    
    d.innerHTML = '<button class="closebtn" id="createdCloseButton'+trCount+'" onclick="createdClosefnc(this.id)" style="background-color: red;"> &#8722 </button>';
}

function deleteallfnc(){
if (confirm('You realy want delete ALL ANIMES inside the list?')) {
	localStorage.din = "Anime Name";
	localStorage.dli = "https://sites.google.com/view/nannan-senpai/";
	document.getElementById("defaultName").innerHTML = localStorage.din;
	document.getElementById("defaultName").href = localStorage.dli;

	var trdlt = 2;
	while (trdlt <= trCount) {
	document.getElementById("createdRow"+trdlt).outerHTML = "";
	trdlt ++;
	}

    localStorage.removeItem("namearr");
    localStorage.removeItem("linkarr");
	trCount = 1;

} else {
    // Do nothing!
}
}


function createdMinusfnc(clicked_id){
document.getElementById("createdNumber"+clicked_id.substring(18).trim()).innerHTML --;
localStorage.cep = document.getElementById("createdNumber"+clicked_id.substring(18).trim()).innerHTML;
}

function createdPlusfnc(clicked_id){
document.getElementById("createdNumber"+clicked_id.substring(17).trim()).innerHTML ++;
localStorage.cep = document.getElementById("createdNumber"+clicked_id.substring(18).trim()).innerHTML;
}

function createdClosefnc(clicked_id) {
if (confirm('You realy want delete "'+document.getElementById("createdName"+clicked_id.substring(18).trim()).innerHTML+'" from your list?\nid: '+clicked_id.substring(18).trim()+'\nLink: '+document.getElementById("createdName"+clicked_id.substring(18).trim()).href.substring(37, 0)+'...')) {
namearr.splice(namearr.indexOf(document.getElementById("createdName"+clicked_id.substring(18).trim()).innerHTML), 1);
linkarr.splice(linkarr.indexOf(document.getElementById("createdName"+clicked_id.substring(18).trim()).href), 1);

localStorage["linkarr"] = JSON.stringify(linkarr);
localStorage["namearr"] = JSON.stringify(namearr);

document.getElementById("createdCell" +clicked_id.substring(18).trim()).parentNode.outerHTML = "";
} else {
}
}

function createdSubmitfnc(clicked_id){
if(linkarr.indexOf("createdInputLink"+clicked_id.substring(19).trim()) === -1 ){
if(document.getElementById("createdInputName"+clicked_id.substring(19).trim()).value !== "" || document.getElementById("createdInputLink"+clicked_id.substring(19).trim()).value !== ""){
document.getElementById("createdName"+clicked_id.substring(19).trim()).innerHTML = document.getElementById("createdInputName"+clicked_id.substring(19).trim()).value.toUpperCase();
document.getElementById("createdName"+clicked_id.substring(19).trim()).href =      document.getElementById("createdInputLink"+clicked_id.substring(19).trim()).value;  

linkarr.push(document.getElementById("createdName"+clicked_id.substring(19).trim()).href);
namearr.push(document.getElementById("createdName"+clicked_id.substring(19).trim()).innerHTML);
localStorage["linkarr"] = JSON.stringify(linkarr);
localStorage["namearr"] = JSON.stringify(namearr);

document.getElementById("createdInputLink"+clicked_id.substring(19).trim()).value = "";
document.getElementById("createdInputName"+clicked_id.substring(19).trim()).value = "";
}
}
}

function downloadlst(){
alert("WORKING IN PROGRESS! \nSORRY.");
/* var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(""));
  element.setAttribute('download', "Anime List");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);*/
}
