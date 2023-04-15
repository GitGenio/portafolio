
// trabajamos con la libreria de swiper par el slider 1
var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBettween: 30,  // separacion entre cada elemento
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});
// trabajamos con la libreria de swiper par el slider 2
var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBettween: 30,  // separacion entre cada elemento
    loop: true,
    loopFillGroupWithBlank:true,       
    navigation:{  
        nextEl:".swiper-button-next",             
        prevEl:".swiper-button-prev"        
    },
    // muestra un solo proyecto si es menor a 520px
    breakpoints:{
        1:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        }            
       
    }
});
