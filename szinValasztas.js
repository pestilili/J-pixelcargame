let a1sz2 = document.getElementById("supra_blue");
let a1sz1 = document.getElementById("supra_original");
let a2sz1 = document.getElementById("nissan_orginal");
let a2sz2 = document.getElementById("nissan_blue");
let a3sz1 = document.getElementById("szisajargany_original");
let a3sz2 = document.getElementById("szisajargany_blue");
let a4sz1 = document.getElementById("miata_original");
let a4sz2 = document.getElementById("miata_blue");

red = document.getElementById("red")
blue = document.getElementById("blue")
yellow = document.getElementById("yellow")
pink = document.getElementById("pink")
white = document.getElementById("white")
green = document.getElementById("green")

if (localStorage.getItem("auto") == "supra") a1sz1.style.visibility = ("visible");
if (localStorage.getItem("auto") == "nissan") a2sz1.style.visibility = ("visible");
if (localStorage.getItem("auto") == "szisajargany") a3sz1.style.visibility = ("visible");
if (localStorage.getItem("auto") == "miata") a4sz1.style.visibility = ("visible");

function szinvalaszt(element){
    if (element == "blue" && localStorage.getItem("auto") == "miata") a4sz2.style.visibility = ("visible"); 
    
}