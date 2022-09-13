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
   document.body.appendChild(currImg);
   
    
   let currPosithionX=EO.pageX-currImg.offsetLeft;
   let currPosithionY=EO.pageY-currImg.offsetTop;
   currImg.style.cursor='grabbing';

   


   window.onmousemove=movingImg;
      

   function movingImg(EO){

      
      EO=EO||window.event;
      EO.preventDefault();

                  
      currImg.style.left=(EO.pageX-currPosithionX)+'px';
      currImg.style.top=(EO.pageY-currPosithionY)+'px';
   
   }  
   
   function cursorChange(EO){
      
      

   }

}


function upMouseButton(EO){

   EO=EO||window.event;
   window.onmousemove=null;

   let currImg=EO.target;
   currImg.style.cursor='default';
   
   
   
   
   console.log('Кнопку отпустили, картинку не тащат');

}
    









