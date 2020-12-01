// This file will be used to declare event handler functions.
//My overall goal is to keep the global sphere low.

//Global Delcarations
// navbar declarations
let home = document.getElementById("home");
let about = document.getElementById("about");
let patients = document.getElementById("patients");
let sleep = document.getElementById("sleep");
// body declarations
let mainContentImg = document.getElementById("mainContentImage");
let mainContentImgTxt = document.getElementById("imgText");



//Event Handler Function Declarations
let hoverNavText = function(event){
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.style.fontWeight = "bold";
    event.target.style.cursor = "pointer";
    // alert();
};

let revertText = function(event){
    event.target.style.backgroundColor = "whitesmoke";
    event.target.style.color = "black";
    event.target.style.fontWeight = "normal";
    event.target.style.cursor = "none";
};

let blurImg = function(event){
    event.target.style.innerHTML = "Sample Text";
    event.target.style.cursor = "pointer";
    event.target.style.filter = "blur(2px)";
    mainContentImgTxt.style.visibility = "visible";
};

let revertImgFilter = function(event){
    let target = event.target;
    event.target.style.filter = "blur(0px)";
    event.target.style.cursor = "none";
    if (target === mainContentImg){
        mainContentImgTxt.style.visibility = "hidden";   
    }
};



//Event Handler Declarations

home.addEventListener("mouseover", hoverNavText);
home.addEventListener("mouseout", revertText);

about.addEventListener("mouseover", hoverNavText);
about.addEventListener("mouseout", revertText);

patients.addEventListener("mouseover", hoverNavText);
patients.addEventListener("mouseout", revertText);

sleep.addEventListener("mouseover", hoverNavText);
sleep.addEventListener("mouseout", revertText);

mainContentImg.addEventListener("mouseover", blurImg);
mainContentImg.addEventListener("mouseout", revertImgFilter);







