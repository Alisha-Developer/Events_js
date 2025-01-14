const keyboardevent=()=>{ window.location.href="keyboardevent.html"};
const inputevent = () => { window.location.href = "Inputevent.html" };
const colorevent = () => { window.location.href = "colorgenerator.html" };

const handleevents1 = () => {
    boxclass.classList.add("onmouseevent");
}
const handleevents2 = () => {
    boxclass.classList.add("onmouseevent2");
}
const handleevents3 = () => {
    boxclass.classList.add("onmouseevent3");
}
const handleevents4 = () => {
    boxclass.classList.add("onmouseevent4");
}
let mousebutton = document.querySelector(".clickbtn");
mousebutton.addEventListener('click',()=>{
    boxclass.style.background = "yellow";
})

mousebutton.addEventListener('dblclick',()=>{
    boxclass.style.background = "yellow";
    boxclass.style.border = "2px solid transparent";
    boxclass.style.borderRadius = "50%";
})

const boxclass = document.querySelector(".box");
boxclass.addEventListener('mouseover',handleevents1);
boxclass.addEventListener('mouseout',handleevents2);
boxclass.addEventListener('mousedown',handleevents3);
boxclass.addEventListener('mouseup',handleevents4);


