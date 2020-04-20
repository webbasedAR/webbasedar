import { detectMob } from "./check-mobile.js";

var ua = navigator.userAgent.toLowerCase();

var x = document.getElementsByClassName("filterDiv");
var c = "none";

if(isMobileSafari()){
  // alert("You are using Mobile Safari")
  c = "safari_ar";
} 
if (ua.indexOf("chrome") > -1) {
    if(detectMob){
      c = "chrome_ar";
      // alert("You are using Mobile Chrome")
    }else{
      // alert("You are using Desktop Chrome");
    }
}
for (var i = 0; i < x.length; i++) {
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function isMobileSafari() {
  var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (isSafari && iOS) {
    // alert("You are using Safari on iOS!");
    return true;
  } else if(isSafari) {
      // alert("You are using Safari.");
  }
  return false;
}
