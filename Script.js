// loder 
function loading() {
    var tl =gsap.timeline()

tl.to("#yellow1", {
    top:"-100%",
    delay:"0.5",
    duration:0.7,
    ease:"expo.out",
})

tl.from("#yellow2", {
    top:"100%",
    delay:"0.5",
    duration:0.7,
    ease:"expo.out",
},"anim")


tl.to("#loader h1",{
    delay:0.6,
    duration:0.7,
    color:"black"
},"anim")


tl.to("#loader", {
    opacity:0

})

tl.to("#loader", {
    display:"none"

})
}

loading()




// services section

// code for set background images
// code for set background images

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")

elems.forEach(function(ele){

    ele.addEventListener("mouseenter",function(){
       var bgimg = ele.getAttribute("data-img")
    //    page2.style.backgroundColor = "red"
       page2.style.backgroundImage = `url(${bgimg})`
       
    })

})







// our tem 
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}








// navbar responsiveness

let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menuIcon");

menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "600px";
        menuIcon.children[0].style.display = "none"; // Hide menu icon
        menuIcon.children[1].style.display = "block"; // Show cross icon
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.children[0].style.display = "block"; // Show menu icon
        menuIcon.children[1].style.display = "none"; // Hide cross icon
    }
}


// Close menu when a link is clicked
let menuLinks = document.querySelectorAll("#menuList a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu();
    });
});


// navbar backraound animation on scroll

$(window).on('scroll' , function() {

    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})




// contact us section email sending


function sendMail() {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_6vrm13n";

    const templateID = "template_se0ya5l";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";

                console.log(res);

                alert("your message sent sucessfully..");


            }
        ).catch(err => console.log(err));



}



