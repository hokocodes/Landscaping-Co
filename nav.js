var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

    

    
  } else {
    document.getElementById("navbar").style.top = "-500px";
    
  }
  prevScrollpos = currentScrollPos;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("navbar");
  if (x.className === "topnav" || y.className === "headerNav") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "topnav";
    y.className = "headerNav";
  }

  // if (y.className === "headerNav") {
  //   y.className += " responsive";
  // } else {
  //   y.className = "headerNav";
  // }
}