let bodyScrolling =  document.querySelector('html,body');                             //document.querySelector('html , body ');

let secondNav = document.querySelector('.fixed-nav');
// console.log(secondNav);
window.addEventListener('scroll' , function(){
    console.log(bodyScrolling.scrollTop);
    if (bodyScrolling.scrollTop >= 100) {
        secondNav.style.display = "block" ;
        // console.log(bodyScrolling.scrollTop >= 30);
        secondNav.classList.remove('animate__animated' , 'animate__slideOutUp');
        secondNav.classList.add('animate__animated','animate__slideInDown');
    }else{
        secondNav.style.display = "none" ;
        secondNav.classList.add('animate__animated' , 'animate__slideOutUp');
        secondNav.classList.remove('animate__animated','animate__slideInDown');
    }
});










let icon = document.querySelector('.to-top');
// console.log(icon);

window.addEventListener('scroll' , function(){
    if(bodyScrolling.scrollTop >50){
        // console.log('hello');
        icon.style.display = 'block';
        // icon.classList.add('animate__animated' , 'animate__slideOutUp');
    }else{
        icon.style.display = 'none';
    }
})
icon.addEventListener('click' ,function(){
    window.scrollTo(0 , 0);
})








// main java

// let listItem = document.querySelectorAll(".li-text");
// let answer = document.querySelectorAll(".answer-all");
// // console.log(listItem , answer);
// let i ;
// for(i = 0 ; i < listItem.length ; i++){
//     listItem[i].addEventListener('click' , function(){
//     // answer.classList.add(".showAnswer");
//     for(k = 0 ; k < answer.length ; k++)
//     if (answer[k].style.display == "none") {
        
//         answer[k].style.display = "block";
        
//     }else{
//         answer[k].style.display = "none";
//     }
// })

// }



// firt question


let listItem = document.querySelector(".li-text");
let answer = document.querySelector(".answer-all");


// console.log(listItem , answer);


    listItem.addEventListener('click' , function(){
    // answer.classList.add(".showAnswer");
    
    if (answer.style.display == "none") {
        
        answer.style.display = "block";
        
    }else{
        answer.style.display = "none";
    }
})


let listItem1 = document.querySelector(".li-1");
let answer1 = document.querySelector(".answer-1");


// console.log(listItem , answer);


    listItem1.addEventListener('click' , function(){
    // answer.classList.add(".showAnswer");
    
    if (answer1.style.display == "none") {
        
        answer1.style.display = "block";
        
    }else{
        answer1.style.display = "none";
    }
})




let listItem2 = document.querySelector(".li-2");
let answer2 = document.querySelector(".answer-2");


// console.log(listItem , answer);


    listItem2.addEventListener('click' , function(){
    // answer.classList.add(".showAnswer");
    
    if (answer2.style.display == "none") {
        
        answer2.style.display = "block";
        
    }else{
        answer2.style.display = "none";
    }
})




let listItem3 = document.querySelector(".li-3");
let answer3 = document.querySelector(".answer-3");


// console.log(listItem , answer);


    listItem3.addEventListener('click' , function(){
    // answer.classList.add(".showAnswer");
    
    if (answer3.style.display == "none") {
        
        answer3.style.display = "block";
        
    }else{
        answer3.style.display = "none";
    }
})





























// let listItem = document.querySelectorAll(".li-text");
// let answer = document.querySelectorAll(".answer-all");
// // console.log(listItem , answer);
// let i ;
// for(i = 0 ; i < listItem.length ; i++){
//     listItem[i].addEventListener('click' ,function(){
//     // answer.classList.add(".showAnswer");
//     for(k = 0 ; k < answer.length ; k++)
//     if (answer[k].style.display == "none") {
        
//         answer[k].style.display = "block";
        
//     }else{
//         answer[k].style.display = "none";
//     }
// })

// }









// let listItem = document.querySelectorAll(".li-text");
// let answer = document.querySelectorAll(".answer-all");
// // console.log(listItem , answer);
// let i ;
// for(i = 0 ; i < listItem.length ; i++){
//     listItem[i].addEventListener('click' , .forEach(function(){
//     // answer.classList.add(".showAnswer");
//     for(k = 0 ; k < answer.length ; k++)
//     if (answer[k].style.display == "none") {
        
//         answer[k].style.display = "block";
        
//     }else{
//         answer[k].style.display = "none";
//     }
// }))
// }























































// let listItem = document.querySelectorAll(".li-text");
// let answer2 = document.querySelectorAll(".answer-all");
     
// // console.log(listItem[0]);
// let i ;
// for(i = 0 ; i < listItem.length ; i++){

// answer2[i].setAttribute("elementIndex" , i);
// listItem[i].setAttribute("elementIndex" , i);
//     listItem[i].addEventListener('click' , function(event){
//         // console.log(answer[i]);
//         // answer.classList.add(".showAnswer");
//        // console.log(answer[0].getAttribute("elementIndex"));      
//          let answer = document.querySelectorAll(".answer-all");

//         for( k = 0 ; k< answer.length ; k++){


//         console.log("target "+event.target.getAttribute("elementIndex"));
//         console.log("answer :" +answer[k].getAttribute("elementIndex"));

//         if(answer[k].getAttribute("elementIndex") == event.target.getAttribute("elementIndex").value){
            
//     if (answer[k].style.display == "none") {
        
//         answer[k].style.display = "block";
        
//     }else{
//         answer[k].style.display = "none";
//     }
// }
// }
// })

// }




























// let listItem = document.querySelector(".li-text");
// let answer = document.querySelector(".answer-all");

// listItem.addEventListener('click' , function(){
//     // answer.classList.add(".showAnswer");
//     if (answer.style.display == "none") {
//         answer.style.display = "block";
        
//     }else{
//         answer.style.display = "none";
//     }
// })










// let listItem = document.querySelectorAll(".li-text");
// let answer = document.querySelector(".answer-all");
// // console.log(answer);
// let i ;
// for(i=0 ; i < listItem.lenght ; i++){
//     listItem[i].addEventListener('click' , function(){


//     })
// }
