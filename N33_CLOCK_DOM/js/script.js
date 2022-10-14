"use strict";

//при нажатии на кнопку вызывается функция проверки и создания циферблата
function buildClock(){
    let diam=document.getElementById('clockDiam').value;

    if(diam<200 || diam>800){  //если введенное число вне диапазона
        
        let err=document.getElementById('err');
        err.style.color='red';
        err.innerHTML='*Введите число в диапозоне от 200 до 800';
    }else{
        //скрываем блок input
        let inputBlcock=document.getElementById('inputBlock');
        inputBlcock.style.display='none';

       //создаем основу часов
        let clockBlock = document.createElement("div");
        clockBlock.style.display='inline-block';
        
       //описываем внешний вид основы часов
       clockBlock.style.background='#FCCA66';
       clockBlock.style.width=diam+'px';
       clockBlock.style.height=diam+'px';
       clockBlock.style.borderRadius=(diam/2)+'px';
       //clockBlock.style.float='right';  //проверка что все часы с содержимым смещаются 

       //добавляем полученные часы на страницу
       document.body.appendChild(clockBlock);

        //создаем блок вывода текущего вермени
        let timeBlock=document.createElement('div');
        clockBlock.appendChild(timeBlock);
        timeBlock.style.position='absolute';

        //описываем внешний вид 'эл.часов' timeBlock
        timeBlock.style.fontWeight='bold';
        timeBlock.style.fontSize=(diam/10)+'px';
        timeBlock.style.margin=0;
        timeBlock.style.padding=0;

       //находим центр "циферблата"
       let clockCentrX=clockBlock.offsetLeft+(clockBlock.offsetWidth/2);
       let clockCentrY=clockBlock.offsetTop+(clockBlock.offsetHeight/2);
       console.log(clockCentrX, clockCentrY);
              
       //получаем текущее время
       let currDate=new Date().toLocaleTimeString();
       timeBlock.innerHTML=currDate;
       
        setInterval(updateTime,1000); //вызываем обновление эл.табло

        function updateTime(){
            
            let currDate=new Date().toLocaleTimeString();
            console.log(currDate);
            timeBlock.innerHTML=currDate;
        }
        
        
        //описываем положение 'эл.часов' timeBlock
        timeBlock.style.left=(clockCentrX-timeBlock.offsetWidth/2)+'px';
        timeBlock.style.top=(clockCentrY-timeBlock.offsetHeight*2)+'px';

//------------------------СТРЕЛКИ------------------------

        let rad=diam/2; //создаем переменную равную радиусу часов
        //создаем часовую стрелку
        let hourHand=document.createElement('div');
        clockBlock.appendChild(hourHand);
        
        hourHand.style.backgroundColor='black';
        hourHand.style.position='absolute';
        hourHand.style.width=rad/2+'px';
        hourHand.style.height=rad/16+'px';
        hourHand.style.borderRadius=rad/16+'px';
        

        hourHand.style.left=clockCentrX+'px';
        hourHand.style.top=(clockCentrY-hourHand.offsetHeight/2)+'px';
        

        //создаем минутную стрелку
        let minHand=document.createElement('div');
        clockBlock.appendChild(minHand);
        
        minHand.style.backgroundColor='darkred';
        minHand.style.position='absolute';
        minHand.style.width=rad*0.75+'px';
        minHand.style.height=rad/32+'px';
        minHand.style.borderRadius=rad/32+'px';

        minHand.style.left=clockCentrX+'px';
        minHand.style.top=(clockCentrY-minHand.offsetHeight/2)+'px';
        

        //создаем секундную стрелку
        let secHand=document.createElement('div');
        clockBlock.appendChild(secHand);
        
        secHand.style.backgroundColor='darkblue';
        secHand.style.position='absolute';
        secHand.style.width=rad*0.85+'px';
        secHand.style.height=rad/48+'px';
        secHand.style.borderRadius=rad/48+'px';

        secHand.style.left=clockCentrX+'px';
        secHand.style.top=(clockCentrY-secHand.offsetHeight/2)+'px';
        

        
       



        
     

        
        

        
        
        
        

    }
}

