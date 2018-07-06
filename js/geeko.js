// JavaScript Document

function password(e) {
	e.preventDefault();
    var destination = document.getElementById('destination').getAttribute("href");
	var usr = document.getElementById('usr').value;
	var pwd = document.getElementById('pwd').value;
	
    if(usr == "grant" || usr == "nik" || usr == "rachel" || usr == "kyler" || usr == "connor" && pwd == "ste@mlearn1ng"){
        window.location.href = destination;
    }else{
	   alert('wrong password or username' + destination);
    }
} 

function collapsingCode(destination) {
    var x = document.getElementById(destination);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}