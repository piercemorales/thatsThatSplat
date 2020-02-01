const bannerBG = document.querySelector('.banner');
const textDisplayed = document.querySelector('.textDisplayed');
const secondBanner = document.querySelector('.secondBanner');

setMainBG = () => {
gsap.set(bannerBG,{backgroundImage:'url(assets/firstBackground.png'})
  
gsap.set(textDisplayed, {attr:{src:'assets/firstText.png'}})
}

// First Animation

gsap.from(textDisplayed, {
  duration: 2,
  y: -20,
  opacity: 0,
  ease: 'power3.out',
  onStart: setMainBG,
  onComplete: fadeOutFirst
});


// fading out the first animation
function fadeOutFirst() {
  console.log('this fades out first animation');
  gsap.to(textDisplayed,{
    opacity:0,
    y: -20,
    ease:'power3.out',
  })
  gsap.to(bannerBG,{
    duration:0.75,
    opacity:0,
    ease: 'power3.out',
    onComplete: runSecond,
  })
}

// A callback to wait until first animation is complete in order to run second part of animation

//Second Animation

function runSecond() {
  console.log('first is complete')

  gsap.to(textDisplayed, {
    duration:3,
    opacity:1,
    ease:'power3.out',
    y: 5,
    attr:{src:'assets/secondText.png'},
    onComplete: fadeOutSecond,
  })

  gsap.to(bannerBG, {
    duration: 1, 
    opacity:1,
    ease: 'power3.out',
    backgroundImage: 'url(assets/secondBackground.png',
    
  })
  gsap.set(secondBanner, {
    duration:1,
    backgroundImage: 'url(assets/thirdBackground.png'
  })
}

// fading out the second animation and setting the second banner background image
function fadeOutSecond() {
  

  gsap.to(textDisplayed, {
    opacity: 0,
    x: -20,
    ease: 'power3.out',
  })
  gsap.to(bannerBG, {
    duration: 1,
    opacity:0,
    x: -300,
    ease: 'power3.out',
    onComplete: runThird,
  })
}

function runThird() {
  gsap.to(textDisplayed, {
    duration: 1,
    opacity: 1,
    ease: 'power3.out',
    x: 0,
    attr: { src: 'assets/thirdText.png' },
    // onComplete: fadeOutSecond,
  })

  gsap.to(bannerBG, {
    duration: 1,
    x: 0,
    opacity: 1,
    ease: 'power3.out',
    backgroundImage: 'none',
    // onComplete: runThird
  })
}
