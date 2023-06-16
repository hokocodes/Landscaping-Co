// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";

//     document.getElementById("logo").style.top = "15px";

    
//   } else {
//     document.getElementById("navbar").style.top = "-100px";
//     if (window.screen.width <= 600) {
//       document.getElementById("logo").style.top = "15px";
//     } else {
//     document.getElementById("logo").style.top = "125px";
//     }
//   }
//   prevScrollpos = currentScrollPos;
// }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}