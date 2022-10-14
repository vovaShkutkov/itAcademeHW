'use strict';
// ************************БЛОК ВАЛИДАЦИИ************************
function validSetting(){
    let validSetting=document.querySelectorAll('input[name="typeTraining"]')
    let valueValidSetting=0;

    
    for(let i=0; i<validSetting.length; i++){
        if(validSetting[i].checked){
            valueValidSetting=validSetting[i].value;
                    
        }else{  
        }
    }

    if(valueValidSetting==1){
        //let customerSetting1=document.getElementById('customerSetting1');
        let customerSetting2=document.getElementById('customerSetting2');
       // customerSetting1.style.display='block';
        customerSetting2.style.display='none';

    }else{
        let customerSetting2=document.getElementById('customerSetting2');
       // customerSetting1.style.display='none';
        customerSetting2.style.display='block';
    }

    
}

//валидация форм на введенные значения

function settingsReset(){ //кнопка сбрасывает замечания об ошибке

    let errCountRounds=document.getElementById('errCountRounds');
    errCountRounds.innerHTML='';
    let errCountWork=document.getElementById('errCountWork');
    errCountWork.innerHTML='';
    let errCountRest=document.getElementById('errCountRest');
    errCountRest.innerHTML='';

}

let errValid=[]; //массив для сбора ошибок формы

function validRoundSet(){

    let validRoundSet=document.getElementById('countRounds');

    if(isNaN(validRoundSet.value) || validRoundSet.value==''){
        let errCountRounds=document.getElementById('errCountRounds');
        errCountRounds.innerHTML=' *Введите число';
        errValid.push(validRoundSet);
    }else{
        let errCountRounds=document.getElementById('errCountRounds');
        errCountRounds.innerHTML='';
    }


}

function validWorkSet(){

    let validWorkSet=document.getElementById('countWork');

    if(isNaN(validWorkSet.value) || validWorkSet.value==''){
        let errCountWork=document.getElementById('errCountWork');
        errCountWork.innerHTML=' *Введите число';
        errValid.push(validWorkSet);
    }else{
        let errCountWork=document.getElementById('errCountWork');
        errCountWork.innerHTML='';
    }


}

function validRestSet(){

    let validRestSet=document.getElementById('countRest');

    if(isNaN(validRestSet.value) || validRestSet.value==''){
        let errCountRest=document.getElementById('errCountRest');
        errCountRest.innerHTML=' *Введите число';
        errValid.push(validRestSet);
    }else{
        let errCountRest=document.getElementById('errCountRest');
        errCountRest.innerHTML='';
    }


}

//проверяем что какие настройки выбрал пользователь
function checkCustomerSetting(){


    const checkCustSet=document.querySelectorAll('input[name="typeTraining"]');

    let valueSet=0; //сюда запишем что выбрано пользавателем

    for(let i=0; i<checkCustSet.length; i++){
        if(checkCustSet[i].checked){
            valueSet=checkCustSet[i].value;
            
                    
        }else{  

        }
    }

    if(valueSet=='1'){
 
        timerStart();


    }else{
        validForm();
    }
}

//валидация что пользовательские настройки корректны
 function validForm(){

   
        
    errValid.length=0; //очищаем массив каждый раз при нажатии на кнопку (вызове функции)
    validRoundSet();
    validWorkSet();
    validRestSet();

    if(errValid.length==0 ){

        customerTimer();
                     
    }else{
        
        errValid[0].focus();
        
    }

}

// ************************ОСНОВНОЙ БЛОК таймера************************


    //инициализируем звуки
let countSignal=document.getElementById('countSignal');
let bgSound=document.getElementById('bgSound');
let bgSound2=document.getElementById('bgSound2');
    
        
        //функции вывода времени в формате 00:00
function timeFunc(time){
        
    let minutes=Math.floor(time / 60);
    let seconds=time % 60;
    if (seconds < 10) {
        seconds = '0'+seconds;
      }
    
    return `${minutes}:${seconds}`;

}

function timerStart(){

    //переключаемся с стартовой "страницы" на "рабочую/таймер".
    let startMenuBlock=document.getElementById('startMenu');
    startMenuBlock.style.display='none';
    let timer5secBlock=document.getElementById('timer5sec');
    timer5secBlock.style.display='block';

    let timersec=document.getElementById('secCount5'); //место для вывода предстартового отсчета
    TIMER();
        

    function TIMER(){

        
        let timeLimit=5; //5секундны    й предстартовый отсчет 
        let timePassed=0; // к-во пройденных секунд от начала запуска таймера
        countdownFunc();
        let countInterval=setInterval(countdownFunc,1000);
        
        function countdownFunc(){
            
            timePassed=timePassed+=1; //c каждым вызовом она увеличивается
            
            let timeLeft=timeLimit+1-timePassed;
                if(timeLeft!=0){
                    
                    timersec.innerHTML=timeFunc(timeLeft);
                    console.log(timeFunc(timeLeft));
                    countSignal.currentTime=0;
                    countSignal.volume=0.25;
                    countSignal.play();
                    
                }else{
                    timersec.innerHTML='GO!';
                    clearInterval(countInterval);
                    countSignal.currentTime=0;
                    countSignal.volume=1;
                    countSignal.play();
                    standartTimer();
                }
        }
    }
     

   

}

function standartTimer(){
    setTimeout(()=>{
        TIMER();
    },1000)

    function TIMER(){

        let timer5secBlock=document.getElementById('timer5sec');
        timer5secBlock.style.display='none';
        let timerStBlock=document.getElementById('timerStandart');
        timerStBlock.style.display='block';
        let timerAnchor=document.getElementById('timerAnchor');
        bgSound.play(); //запуск фоновой музыки
        bgSound.loop=true; //зацикливаем песню на весь период таймера
        
        
        let timeLimit=60; // на странице указано 30мин, для быстроты проверки 
        //сделал 60сек.
        let timePassed=0; // к-во пройденных секунд от начала запуска таймера
        countdownFunc(); //для срабатывания функции сразу
        let countInterval=setInterval(countdownFunc,1000); //запуск посекундного вызова функции
          
        function countdownFunc(){
            
            timePassed=timePassed+=1; //c каждым вызовом она увеличивается
            
            let timeLeft=timeLimit+1-timePassed; 
                if(timeLeft!=0){
                    
                    timerAnchor.innerHTML=timeFunc(timeLeft);
                    
                }else{

                    timerAnchor.innerHTML=timeFunc(timeLeft);
                    clearInterval(countInterval);
                    countSignal.currentTime=0;
                    countSignal.play();
                    bgSound.pause();
                    bgSound.currentTime='0';
                    setTimeout(()=>{
                          
                        timerStBlock.style.display='none';
                        let finishPage=document.getElementById('endTraining');
                        finishPage.style.display='block';
                
                    },1000);
                }

                setCircleDasharray(); //фун-я анимационного отображение уменьшения времени

                function calculateTimeFraction() {
                    const rawTimeFraction = timeLeft / timeLimit;
                    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
                }
        
                function setCircleDasharray() {
                    const circleDasharray = `${(
                      calculateTimeFraction() * 283
                    ).toFixed(0)} 283`;
                    document
                      .getElementById("base-timer-path-remaining")
                      .setAttribute("stroke-dasharray", circleDasharray);
                  }
        }
                
    }
}



//кнопки плеера

function play(){

        
    bgSound.play();
    

}

function pause(){
    
    bgSound.pause();
}

function restart(){
    
    bgSound.pause();
    bgSound.currentTime='0';
    bgSound.play();
    
}

function mute(){
    
    bgSound.volume=0;
    
    
}

function quiet(){
    
    bgSound.volume=0.3;
    
}

function loudy(){
    
    bgSound.volume=1;
    
}



//функция перехода на начальный экран
function reloadPage(){

    document.location.reload();
}