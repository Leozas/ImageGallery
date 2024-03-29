var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(GetImageAttribute) {
    var imgSrc = GetImageAttribute.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

/* setting display source tot img source */

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the Darken/Lighten button */
btn.setAttribute('class', btn);
btn.textContent = 'Darken';

btn.onclick = function DarkenOrLighten() {
  var btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}