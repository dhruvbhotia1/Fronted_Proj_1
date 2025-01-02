
var crsr  = document.querySelector("#cursor");
var blurr  = document.querySelector("#cursor-blur");

document.addEventListener('mousemove' , function(dets){
                  

    crsr.style.left = dets.x+20+"px";
    crsr.style.top = dets.y+20+"px";
    blurr.style.left = dets.x-250+"px";
    blurr.style.top = dets.y-250+"px";


});

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem) {

    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
        
    });

    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid white";
        crsr.style.backgroundColor = "#95c11e"; 
    });

})







gsap.to("#nav" , {
     backgroundColor: "#000",
     duration: 0.5,
     height:"110px",
     scrollTrigger: {

        trigger: "#nav", 
        scroller: "body",
        start: "top -20%",
        end: "top -11%",
        scrub: 1

    }
});


gsap.to("#main" , {

    backgroundColor: "#000",
    duration: 0.5,

    scrollTrigger: {

        trigger: "#main",
        scroller: "body",

        scrub:1,
        start: "top -50%",
        end: "top -100%"
    
    }

});

gsap.from("#about-us img , #about-us-in", {

    y:50,
    opacity:0,
    duration:2,
    

    scrollTrigger: {

        trigger: "#about-us",
        scroller: "body",
        start:"top 60%",
        end: "top 55%",
        scrub:3

    }
});


gsap.from(".card", {

    scale: 0.8,
    opacity:0,
    duration:0.5,
    

    scrollTrigger: {

        trigger: ".card",
        scroller: "body",
        start:"top 70%",
        end: "top 65%",
        scrub:2

    }
});


gsap.from("#colon1", {

    y:-70,
    x:-70,
    opacity:0,
    duration:0.5,
    

    scrollTrigger: {

        trigger: "#colon1",
        scroller: "body",
        start:"top 70%",
        end: "top 65%",
        scrub:2

    }
});

gsap.from("#colon2", {

    y:770,
    x:70,
    
    duration:0.5,
    

    scrollTrigger: {

        trigger: "#colon1",
        scroller: "body",
        start:"top 70%",
        end: "top 65%",
        scrub:2

    }
});

gsap.from("#page-4 h1", {

    y:50,
    duration:0.4,
    scrollTrigger: {

        trigger: "#page-4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 45%",
        scrub:2
    }
})


