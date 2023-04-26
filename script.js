

// trabajamos con la libreria de swiper par el slider 
var swiper = new Swiper(".mySwiper",{
    slidesPerView:5,
    spaceBettween: 20,  // separacion entre cada elemento
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
        680:{
            slidesPerView:2
        }            
       
    }
});
