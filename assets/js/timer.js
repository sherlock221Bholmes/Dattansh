var deadline = new Date("Jan 21, 2023 09:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = ('0' + Math.floor(t / (1000 * 60 * 60 * 24))).slice(-2);
var hours = ('0' + Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60))).slice((-2));
var minutes = ('0' + Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
var seconds = ('0' + Math.floor((t % (1000 * 60)) / 1000)).slice(-2);
document.getElementById("demo").innerHTML = "<span>D &nbsp &nbsp &nbsp" + "H &nbsp &nbsp &nbsp" + "M &nbsp &nbsp &nbsp" + "S </span><br>" + days + "&nbsp &nbsp &nbsp" + hours + "&nbsp &nbsp &nbsp" + minutes + "&nbsp &nbsp &nbsp" + seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "";
    }
}, 1000);