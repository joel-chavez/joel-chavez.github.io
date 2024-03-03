// Set main domain
var targetURL = "https://realjoelchavez.com";


// Parse the target URL
var parser = document.createElement('a');
parser.href = targetURL;

// Get hostname and pathname from target URL
var targetHostname = parser.hostname.replace('www.', '');
var targetPathname = parser.pathname.replace(/\/$/, '');

// Get current page's hostname and pathname, normalized
var currentHostname = window.location.hostname.replace('www.', '');
var currentPathname = window.location.pathname.replace(/\/$/, '');

// Redirect only if both hostname and pathname do not match
if (currentHostname !== targetHostname || currentPathname !== targetPathname) {
    window.location.href = targetURL;
}


window.onbeforeunload = function () {
  window.scrollTo(-10, -10);
}


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

function adjustFadeInPortaitImg() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const scaleFactor = isPortrait ? 2.1 : 1; // Increase scale in portrait mod
  const leftDistance = isPortrait ? '0vw' : '25vw'; // Adjust left distance based on orientation
  const topDistance = isPortrait ?'25vh' : '-5vh'; // Increase scale in portrait mod

  const fadeImages = document.querySelectorAll('.imageFadeIn');
  fadeImages.forEach(img => {
      img.style.transform = `scale(${scaleFactor})`;
      img.style.left = leftDistance;
      img.style.top=topDistance;

  });
}

// Call the function on page load and on window resize
window.addEventListener('load', adjustFadeInPortaitImg);
window.addEventListener('resize', adjustFadeInPortaitImg);


function adjustTextPortait() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const text = document.querySelectorAll('.textScaleIn');
  text.forEach(text => {
    if(isPortrait) {
      text.style.width='100vw';
      text.style.textAlign = 'justify';
      text.style.left='0vw';
      text.style.right='0vw';
      text.style.margin='0vw'
  } else {
    text.style.width='25vw';
    text.style.textAlign = 'right';
    text.style.left='0vw';
    text.style.right='0vw';  }
  });
}

// Call the function on page load and on window resize
window.addEventListener('load', adjustTextPortait);
window.addEventListener('resize', adjustTextPortait);
