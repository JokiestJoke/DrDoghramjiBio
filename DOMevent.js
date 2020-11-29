// This file will be used to declare event handler functions.
//My overall goal is to keep the global sphere low.

//Global Delcarations
let home = document.getElementById("home");
let about = document.getElementById("about");
let patients = document.getElementById("patients");
let sleep = document.getElementById("sleep");



//Event Handler Function Declarations
let hoverNavText = function(event){
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.style.fontWeight = "bold";
    // alert();
};

let revertText = function(event){
    event.target.style.backgroundColor = "whitesmoke";
    event.target.style.color = "black";
    event.target.style.fontWeight = "normal";
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






