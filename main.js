let circleSVG = document.querySelector("#svg");
gsap.set('#circleWrap, #svg', {
  xPercent: -50,
  yPercent: -50
})
MotionPathPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
let circlePath = document.querySelector("#circle");
const items = document.querySelectorAll('.item');
gsap.set(items, {
  motionPath: {
    path: circlePath,
    align: circlePath,
    alignOrigin: [0.5, 0.5],
    autoRotate: -90,
    end: i => i / items.length
  }
});
let action = gsap.timeline({
    paused: true
  })
  .to('#circleWrap', {
    rotation: -360,
    transformOrigin: 'center',
    duration: 1,
    ease: Linear.ease,
  })
const startY = innerHeight;
const finishDistance = innerHeight * 4;
let circleWrap = document.querySelector('#circleWrap')
// Listen to the scroll event
let scroll = document.getElementById("scroll");

console.log()
scroll.addEventListener("scroll", function () {
  items.forEach(elem =>{
    
    let angle = +elem.style.transform.split('rotate').pop().replace(/[^.0-9]/g,'')
    // gsap.set(elem,{
    //   rotate:gsap.utils.random(angle-5,angle+5)
    // })
    // gsap.to(elem,{
    //   rotate:angle,
    //   duration:0.5,
    // })
    
  })
  
  if (!requestId) {
    requestId = requestAnimationFrame(update);
  }
});
update();

function update() {


  let y = scroll.scrollTop;
  ratio = y / (startY * 5);
  if (ratio > 0.9994) $('#scroll').scrollTop(4);
  if (ratio < 0.001) $('#scroll').scrollTop(document.body.clientHeight-1)
  action.progress(ratio);

  requestId = null;

}
let mouse = document.querySelector('.mouse')

let menuItems = document.querySelectorAll('.item')

  

menuItems.forEach(elem => {
  
  // gsap.to(elem.querySelector('img'),{
  //   width:300,
  //   right:gsap.utils.random(-500, -350),
  //   opacity:1,
  //   duration:.3,
    
  // })
  elem.addEventListener('mouseenter', function () {
    
    gsap.set(elem.querySelector('img'),{
      left:gsap.utils.random(-400,-300),
      // transformOrigin:'left center',
    })
    
    gsap.to(elem.querySelector('img'),{
      // scaleX:1,
      width:gsap.utils.random(250,350),
      height:gsap.utils.random(250,350),
      left:gsap.utils.random(250, 0),
      opacity:1,
      duration:.3,
      
      
    })
    
    
    // let src = this.dataset.src
    // mouse.style.backgroundImage = `url(${src})`
    // this.classList.add('hover_img')
  })
  elem.addEventListener('mouseleave', function () {
    
    // this.classList.remove('hover_img')
    gsap.to(elem.querySelector('img'),{
      width:0,
      left:0,
      // height:0,
      // scaleX:0,

      // left:"auto",
      // right:0,
      // right:gsap.utils.random(500, 200),
      opacity:0,
      duration:.3,
      transformOrigin:'left center',
      
    })
    // gsap.to(elem.querySelector('img'),{
    //   width:0,
    //   // ease:Linear.ease,
    //   // right:gsap.utils.random(-100, 100),
    //   duration:.5,
    //   opacity:0,
      // visibility:'hidden',
    // })
  
    
    // mouse.style.backgroundImage = ``
  })
})




// document.addEventListener('mousemove', function (e) {
//   TweenMax.to(mouse, .01, {
//     x: e.clientX -150,
//     y: e.clientY - 150
//   })
// });