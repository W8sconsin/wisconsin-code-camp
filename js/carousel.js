var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var slideIndex2 = 1;
showDivs(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var z = document.getElementsByClassName("mySlides2");
  if (n > z.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = z.length}
  for (i = 0; i < z.length; i++) {
     z[i].style.display = "none";  
  }
  z[slideIndex2-1].style.display = "block";  
}