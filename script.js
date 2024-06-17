
function swiperSart(){
const progressCircle = document.querySelector("#home .autoplay-progress svg");
const progressContent = document.querySelector("#home .autoplay-progress span");
var swiper = new Swiper("#home .mySwiper", {
  loop: true,
 
  navigation: {
    nextEl: "#home .swiper-button-next",
    prevEl: "#home .swiper-button-prev",
  },
  pagination: {
    el: "#home .swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
}
swiperSart();

function navMove(){
var nav =document.querySelector("#nav")
var mian =document.querySelector("#mian")
main.addEventListener("wheel",function(dets){

if(dets.deltaY>0){
    gsap.to(nav,{
        y:"-100%",
        duration:1,
    })
}
else{
    gsap.to(nav,{
        y:"0%",
        duration:1.3,
    })
}
}, { passive: true })

}
navMove();






function locoMotive(){
    gsap.registerPlugin(ScrollTrigger);
  
  
  // --- SETUP START ---
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({ scroller: "#main" });
  // --- SETUP END ---
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  locoMotive()
function h1Text(){
    var h1text = document.querySelector(".brand-text h1").textContent
var splittedtext = h1text.split("")
      console.log(splittedtext)
                               var clutter = ""
splittedtext.forEach(function(elem){
    clutter +=`<span>${elem}</span>`

})

document.querySelector(".brand-text h1").innerHTML = clutter
}
h1Text()

function sincePara(){
    var since=document.querySelector('.since p')
var sinceText = document.querySelector(".since p").textContent
var splittext = sinceText.split("")
console.log(splittext)
var clutter2 = ""
splittext.forEach(function(dets){
    clutter2 +=`<span>${dets}</span>`
  
})
document.querySelector(".since p").innerHTML = clutter2;
}
sincePara()
 var tl=gsap.timeline()
tl.from(".brand-text h1 span",{
    opacity:0,
    stagger:0.3,
     y:40,
    duration:1,
    delay:0.3, 
})
tl.from(".since p span",{
     opacity: 0.2,
    stagger: 0.2,
    duration: 0.1

})
tl.from(".brand-text img",{
     opacity:0,
    //  y:40,
    scale:0,
     duration:1,
     
},"a")
tl.to(".line",{
    width:"60%",
    opacity:0.6,
    duration:1,
},"a")

tl.to(".open",{
    y:"-100%",
    duration:1,
    delay:0.2,
    onComplete: function() {
      // This function will be called when the animation completes
      var nav= document.querySelector("#nav")
      nav.style.zIndex="6"

     gsap.from("#nav",{
      y:"-100%",
      duration:0.4,
      // ease: "power.inOut",
     })
   
    } 
})
  

  function boxAnimation(){
    var overlays = document.querySelectorAll(".overlay");
  
  overlays.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      gsap.to(elem, {
          backgroundColor: "rgba(0, 0, 0, 0.4)"
      });
      gsap.to(elem.querySelector(".box-text"), {
          opacity: 1,
          y: -100,
          duration: 0.8
      });
      gsap.to(elem.querySelectorAll(".box-text p"), {
        opacity: 0.5,
        duration: 2
      });
    });
  
    elem.addEventListener("mouseleave", function(){
      gsap.to(elem, {
          backgroundColor: "rgba(0, 0, 0, 0)" 
      });
      gsap.to(elem.querySelector(".box-text"), {
          // opacity: 0,
          y: 0,
          duration: 0.8
      });
      gsap.to(elem.querySelectorAll(".box-text p"), {
        opacity: 0,
        duration: 2
      });
    });
  });
  
  }
  boxAnimation()




  //puse -opening-scroll
  function locoMotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Configure ScrollTrigger to work with Locomotive Scroll
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and Locomotive Scroll on window updates
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: "#main" });

    // Refresh ScrollTrigger and Locomotive Scroll after setup
    ScrollTrigger.refresh();

    // Function to disable scrolling
    function disableScroll() {
        locoScroll.stop();
 
    }

    // Function to enable scrolling
    function enableScroll() {
        locoScroll.start();
      
    }

    // GSAP animation using ScrollTrigger
    gsap.to(".open", {
        duration:5,
            onStart: disableScroll,
            onComplete: enableScroll,
        
    });
  }


  function productswiper(){
  const progressCircle = document.querySelector("#page5 .autoplay-progress svg");
  const progressContent = document.querySelector("#page5 .autoplay-progress span");
  
  var swiper = new Swiper("#page5 .mySwiper", {
      slidesPerView: 4,
      loop:true,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
      pagination: {
        el: "#page5 .swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
  }

  productswiper()
    



  // var move2 = gsap.timeline({
  //   scrollTrigger:{
  //     scroller:'',
  //     trigger:'.shoe-container',
  //     start:'top 50%',
  //     markers:true,
  //     scrub:2
  //   }
  // })
  // move2
  // .to(".shoe-container", {
  //   x: -2000,
  // });
  // move2
    
  // .to('#img1',{
  //   x: 230,
  // },'elem')
  // .to('#img2',{
  //   x: 230,
  // },'elem')
  // .to('#img3',{
  //   x: 230,
  // },'elem')
  // .to('#img4',{
  //   x: 230,
  // },'elem')
  // .to('#img5',{
  //   x: 230,
  // },'elem')
  // .to('#img6',{
  //   x: 230,
  // },'elem')
  // .to('#img7',{
  //   x: 230,
  // },'elem')