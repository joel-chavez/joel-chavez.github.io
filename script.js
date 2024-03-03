window.onload = function() {
// Check if the current domain is not the target domain
  if (window.location.hostname == "https://www.chavezjoel.com" ) {
    // Redirect to the target URL
   window.location.href = "https://realjoelchavez.com";
  }
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
