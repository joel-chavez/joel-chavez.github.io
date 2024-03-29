// Define target URL
var targetHost = "realjoelchavez.com";

// Check if the current location's host matches the target host
var isTargetHost = window.location.host === targetHost;

// Check if the current location is localhost or 127.0.0.1 (typical live server addresses)
var isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

var isFileProtocol = window.location.protocol === 'file:';
// If not on localhost, not already at the target host, redirect while preserving the pathname and search
if (!isLocalhost && !isFileProtocol && !isTargetHost) {
  // Construct the full URL to redirect to while preserving the pathname and search
    var newPath = window.location.pathname + window.location.search;
    window.location.href = "https://" + targetHost + newPath;
}


  // Initialize animations here

window.onbeforeunload = function () {
  window.scrollTo(-10, -10);
}

window.onload = function() {

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){          
      if (!entry.target.classList.contains('animate')) {
        entry.target.classList.add('animate')
      }
    } 
  })
});
const hiddenElements = document.querySelectorAll('.animate-on-scroll');

hiddenElements.forEach((el)=> observer.observe(el));

function adjustPortaitImg() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const scaleFactor = isPortrait ? 2.1 : 1; // Increase scale in portrait mod
  const leftDistance = isPortrait ? '-4vw' : '25vw'; // Adjust left distance based on orientation
  const topDistance = isPortrait ?'25vh' : '-5vh'; // Increase scale in portrait mod

  const fadeImages = document.querySelectorAll('.imageFadeIn','.imageScaleIn','lines');
  fadeImages.forEach(img => {
      img.style.transform = `scale(${scaleFactor})`;
      img.style.left = leftDistance;
      img.style.top=topDistance;

  });
}
window.addEventListener('load', adjustPortaitImg);
window.addEventListener('resize', adjustPortaitImg);
// Call the function on page load and on window resize



function adjustTextPortait() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const text = document.querySelectorAll('.textScaleIn', '.textScaleIn.animate');
  text.forEach(text => {
    if(isPortrait) {
      text.style.width='100vw';
      text.style.textAlign = 'justify';
    }  
    
    else {
    text.style.width='25vw';
    text.style.textAlign = 'right';
    }
  });
}

// Call the function on page load and on window resize

};

