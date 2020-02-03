const bannerBG = document.querySelector('.banner');
const textDisplayed = document.querySelector('.textDisplayed');
const finalText = document.querySelector('.finalText');
const finalSubText = document.querySelector('.finalSubText');
// Set a second banner in order to have the 2nd animation smooth
const secondBanner = document.querySelector('.secondBanner');
// final banner for the final slide
const finalBanner = document.querySelector('.finalBanner');


setMainBG = () => {
  gsap.set(finalBanner,{opacity:0,})
  gsap.set(bannerBG,{backgroundImage:'url(assets/firstBackground.png'})
  gsap.set(textDisplayed, {attr:{src:'assets/firstText.png'}})
  gsap.set(finalText, {attr:{ src:'assets/fourthMainText.png' }})
  gsap.set(finalSubText, {attr:{ src:'assets/fourthSubText.png' }})
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

  // Used timeout to delay the new background image load 
  setTimeout(function(){gsap.set(secondBanner, {
    duration: 1,
    backgroundImage: 'url(assets/thirdBackground.png'
  })},1000)
  
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

// Third Slide Animation
function runThird() {
  gsap.to(textDisplayed, {
    duration: 2,
    opacity: 1,
    ease: 'power3.out',
    x: 0,
    attr: { src: 'assets/thirdText.png' },
    onComplete: fadeOutThird
  })

  gsap.to(bannerBG, {
    duration: 1,
    x: 0,
    opacity: 1,
    ease: 'power3.out',
    backgroundImage: 'none',
  })


  setTimeout(function () {
    gsap.to(finalBanner, {
      duration: 1,
      opacity:1,
    })
    }, 2000)
  }

//third fade out animation and replacing new background
function fadeOutThird() {

  gsap.to(textDisplayed, {
    duration: 0.5,
    opacity: 0,
    ease: 'power3.out',
  })

  gsap.to(secondBanner, {
    duration:1.5,
    opacity: 0,
    onComplete: runFourth,

  })
}

// Final Slide Animation
function runFourth() {

  gsap.to(finalText, {
    duration: 3,
    opacity: 1,
    ease: 'power3.out',
    zIndex: 10
  })
  gsap.to(finalSubText, {
    duration:3,
    opacity: 1,
    ease: 'power3.out',
  })

}
