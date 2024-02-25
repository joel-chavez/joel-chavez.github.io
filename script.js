window.onbeforeunload = function () {
  window.scrollTo(-10, -10);
}
function topScroll(){
  window.scrollTo(0, 0);
}
window.addEventListener('reload', topScroll);

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
  const scaleFactor = isPortrait ? 1.6 : 1; // Increase scale in portrait mod
  const leftDistance = isPortrait ? '-13vw' : '37.5vw'; // Adjust left distance based on orientation
  const images = document.querySelectorAll('.imageFadeIn');
  images.forEach(img => {
      img.style.transform = `scale(${scaleFactor})`;
      img.style.left = leftDistance;

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
      text.style.width='90vw';
      text.style.textAlign = 'center';
      text.style.left='2.5vw';
      text.style.right='2.5vw';
  } else {
    text.style.width='32.5vw';
    text.style.textAlign = 'right';
    text.style.left='0.5vw';
    text.style.right='0vw';  }
  });
}

// Call the function on page load and on window resize
window.addEventListener('load', adjustTextPortait);
window.addEventListener('resize', adjustTextPortait);
