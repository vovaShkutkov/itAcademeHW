"use strict";

window.addEventListener('load', function () {

    let allImgs=document.querySelectorAll('img'); //находим массив изображений

   
    //  console.log(allImgs);

    for(let i=0; i<allImgs.length; i++){
   
        allImgs[i].style.left=allImgs[i].offsetLeft+'px';
        allImgs[i].style.top=allImgs[i].offsetTop+'px';
        //console.log(allImgs[i].style.left, allImgs[i].style.top);
        
         
     }

     for(let i=0; i<allImgs.length; i++){

        allImgs[i].style.position='absolute';
        allImgs[i].onmousedown=pushMouseButton;
        allImgs[i].onmouseup=upMouseButton;
       
       

     }
    
  })


function pushMouseButton(EO){

   EO=EO||window.event;
   EO.preventDefault();

   console.log('Нажали на картинку');

   let currImg=EO.target;

   let currPosithionX=EO.pageX-currImg.offsetLeft;
   let currPosithionY=EO.pageY-currImg.offsetTop;


   window.onmousemove=movingImg;

   function movingImg(EO){

      EO=EO||window.event;
      EO.preventDefault();

      console.log('Потащили картинку');
      
      currImg.style.zIndex=1000;
      currImg.style.left=(EO.pageX-currPosithionX)+'px';
      currImg.style.top=(EO.pageY-currPosithionY)+'px';
   
           
   
   }   

}


function upMouseButton(EO){

   EO=EO||window.event;
   window.onmousemove=null;
   EO.target.style.zIndex=0;
   console.log('Кнопку отпустили, картинку не тащат');

}
    









