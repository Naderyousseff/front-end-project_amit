let secNav = document.querySelector('.second-nav');
let bodyScroll = document.querySelector('html , body');
window.addEventListener('scroll' , function(){
    console.log(bodyScroll.scrollTop);
    if(bodyScroll.scrollTop >= 100){
        secNav.style.display = 'block';
        // secNav.classList.add('animate__animated', 'animate__slideOutDown')
    }else{
        secNav.style.display = 'none';
       
    }
});




// let extraImage = document.querySelectorAll('.extra');
// // console.log(extraImage);
// let showmore = document.querySelector('.show-more');
// let showLess = document.querySelector('.show-less');
// showmore.addEventListener('click' , function(){
//     let count;
//     for(count = 0; count < extraImage.length; count++){
//     extraImage[count].style.display='block';
// }
// showLess.style.csstext= 'display:block;margin:0 auto';
// showmore.style.display = "none";}



// );


// showLess.addEventListener('click' , function(){
//     let count;
//     for(count = 0; count < extraImage.length; count++){
//     extraImage[count].style.display='none';
// }
// showLess.style.display = "none";
// showmore.style.csstext= 'display:block;margin:0 auto';}




// );
