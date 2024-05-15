function h1Text(){
    var h1text = document.querySelector("h1").textContent
var splittedtext = h1text.split("")
      console.log(splittedtext)
                               var clutter = ""
splittedtext.forEach(function(elem){
    clutter +=`<span>${elem}</span>`

})

document.querySelector("h1").innerHTML = clutter
}
h1Text()

var since=document.querySelector('.since p')
var sinceText = document.querySelector(".since p").textContent
var splittext = sinceText.split("")
console.log(splittext)
var clutter2 = ""
splittext.forEach(function(dets){
    clutter2 +=`<span>${dets}</span>`
  
})
document.querySelector(".since p").innerHTML = clutter2;


 var tl=gsap.timeline()
tl.from("h1 span",{
    opacity:0,
    stagger:0.3,
     y:40,
    duration:1,
    delay:0.3,
   
})
tl.from(".since p span",{
     opacity: 0.2,
    stagger: 0.3,
    duration: 1,
    
    

})
tl.from(".text img",{
     opacity:0,
     y:40,
     duration:1,
     
})
tl.to(".line",{
    width:"60%",
    opacity:0.6,
    duration:2,
})

tl.to(".open",{
    y:-600,
    duration:1,
    delay:0.2
})
