window.onbeforeunload = function () {
  window.scrollTo(0, 0);
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

function adjustImageScale() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const scaleFactor = isPortrait ? 1.3 : 1; // Increase scale in portrait mod
  const leftDistance = isPortrait ? '5vw' : '37.5vw'; // Adjust left distance based on orientation
  const images = document.querySelectorAll('.imageScaleIn, .imageFadeIn');
  images.forEach(img => {
      img.style.transform = `scale(${scaleFactor})`;
      img.style.left = leftDistance;

  });
}

// Call the function on page load and on window resize
window.addEventListener('load', adjustImageScale);
window.addEventListener('resize', adjustImageScale);
