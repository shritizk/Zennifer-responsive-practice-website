

let navbar=document.querySelector("nav");
   
let menulink=document.getElementById("menu-links");
window.onscroll=function(){
  if (window.scrollY > 0){
    
    navbar.style.background='#eefff9';
  }else{
    navbar.style.background='transparent';  
  }
}


function toogleMenu(){
  menulink.classList.toggle("show-menu");
}







