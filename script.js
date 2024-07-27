//  ------------ js for about section ---------

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ------ js for sidemenu in media ----


var sidemenu =document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// --------- js for contact form ---------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYHyh3Rd8Sq0W8e-elyxZCK-guKaJq786it7v7Gb6h6I3maJnbZ6beSNe_x2QPTgCuPA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

//  --------- js for sticky nav bar ------ 

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})
