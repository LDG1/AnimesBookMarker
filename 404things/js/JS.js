document.getElementById("btnb").onload = lala();


function lala(){
	btna();
	btnb();
	btnc();
}

function btna() {
setInterval( function(){ 
	var str = document.getElementById("btna").innerHTML;

var rl = str.charAt(Math.floor((Math.random() * str.length) + 1));
    var test = str.replace(rl, rl.toUpperCase());

    document.getElementById("btna").innerHTML = test;
    }, 40);
    

    setInterval( function(){
    var str = document.getElementById("btna").innerHTML;

var rl = str.charAt(Math.floor((Math.random() * str.length) + 1));
    var test = str.replace(rl, rl.toLowerCase());

    document.getElementById("btna").innerHTML = test;

    }, 70);
}

function btnb() {
setInterval( function(){ 
	var str = document.getElementById("btnb").innerHTML;

var rl = str.charAt(Math.floor((Math.random() * str.length) + 1));
    var test = str.replace(rl, rl.toUpperCase());

    document.getElementById("btnb").innerHTML = test;
    }, 40);
    

    setInterval( function(){
    var str = document.getElementById("btnb").innerHTML;

var rl = str.charAt(Math.floor((Math.random() * str.length) + 1));
    var test = str.replace(rl, rl.toLowerCase());

    document.getElementById("btnb").innerHTML = test;

    }, 70);
}

function btnc() {
setInterval( function(){ 
	var str = document.getElementById("btnc").innerHTML;

var rl = str.charAt(Math.floor((Math.random() * str.length) + 1));
    var test = str.replace(rl, rl.toUpperCase());

    document.getElementById("btnc").innerHTML = test;
    }, 40);
    

    setInterval( function(){
    var str = document.getElementById("btnc").innerHTML;

var rl = str.charAt(Math.floor((Math.random() * str.length) + 1));
    var test = str.replace(rl, rl.toLowerCase());

    document.getElementById("btnc").innerHTML = test;

    }, 70);
}