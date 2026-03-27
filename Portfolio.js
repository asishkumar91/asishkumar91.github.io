let button = document.getElementById("btn")
let isdark = true;

document.addEventListener("DOMContentLoaded" , ()=>{
button.addEventListener("click" , ()=>{
    isdark = !(isdark)
    if(isdark){
    document.body.style.background = "rgba(126, 122, 117, 0.6)";
    button.innerHTML = "White Mode";
    }
    else{
    document.body.style.background = "rgb(255,255,255)";
    button.innerHTML = "Dark Mode";
    }
})

})

let visitor, element = document.querySelector(".Welcome");
if(localStorage.getItem("name")){
    visitor = localStorage.getItem("name");}
else{
 visitor = prompt("Enter Your Name");
 localStorage.setItem("name", visitor);
}
element.innerHTML = `Welcome ${visitor}, nice to meet you!`

document.addEventListener("DOMContentLoaded" , ()=>{
let abouti = document.querySelector(".about")
abouti.addEventListener("click", ()=>{
        window.location.href = "about.html"
})



let vision = document.querySelector(".vision")
vision.addEventListener("click", ()=>{
        window.location.href = "vision.html"
})


let Contact = document.querySelector(".Cnt")
Contact.addEventListener("click", ()=>{
        window.location.href = "contact.html"
})


let gallery = document.querySelector(".gallery")
gallery.addEventListener("click", ()=>{
        window.location.href = "gallery.html"
})


let hire = document.querySelector(".Hire")
hire.addEventListener("click", ()=>{
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=sunitasaha409@gmail.com&su=Hiring%20Opportunity","_blank");
})


let interview = document.querySelector(".Inter")
interview.addEventListener("click", ()=>{
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=sunitasaha409@gmail.com&su=Interview%20Invitation","_blank");
})

});






    


