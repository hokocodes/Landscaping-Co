var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("logo").style.top = "15px";
    
  } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("logo").style.top = "125px";
  }
  prevScrollpos = currentScrollPos;
}