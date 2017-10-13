document.getElementById("btnb").onload = lala();


function lala(){
	btna();
	btnb();
	btnc();
}
	

(function(w, d, n, s, t) {
    w[n] = w[n] || [];
    w[n].push(function() {
        Ya.Direct.insertInto(84098, "yandex_ad", {
            ad_format: "direct",
            type: "240x400",
            border_type: "block",
            border_radius: true,
            site_bg_color: "FFFFFF",
            header_bg_color: "FEEAC7",
            bg_color: "FFF9F0",
            border_color: "FBE5C0",
            title_color: "0000CC",
            url_color: "006600",
            text_color: "000000",
            hover_color: "0066FF",
            favicon: true,
            no_sitelinks: false
        });
    });
    t = d.getElementsByTagName("script")[0];
    s = d.createElement("script");
    s.src = "//an.yandex.ru/system/context.js";
    s.type = "text/javascript";
    s.async = true;
    t.parentNode.insertBefore(s, t);
})(window, document, "yandex_context_callbacks");

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