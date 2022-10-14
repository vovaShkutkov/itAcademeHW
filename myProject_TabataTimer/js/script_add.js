function customerTimer(){ 
    
    let roundsValue=Number(document.getElementById('countRounds').value);
    let jobTimeValue=Number(document.getElementById('countWork').value);
    let restTimeValue=Number(document.getElementById('countRest').value);
    let roundCoun=document.getElementById('roundCounter');
    let custRounds=document.getElementById('custRounds');

    custRounds.innerHTML=`${roundsValue}`;

    //console.log(roundsValue+':'+jobTimeValue+':'+restTimeValue);

    let roundCounter=1; // заводим переменную для подсчета раундов

    //переключаемся с стартовой "страницы" на "рабочую/таймер".
    let startMenuBlock=document.getElementById('startMenu');
    startMenuBlock.style.display='none';
    let timer5secBlock=document.getElementById('timer5sec');
    timer5secBlock.style.display='block';

    let timersec=document.getElementById('secCount5'); //место для вывода предстартового отсчета
    TIMER();
//**********correct********** */
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
                    // console.log(timeFunc(timeLeft));
                    
                    
                }else{
                    timersec.innerHTML='GO!';
                    clearInterval(countInterval);
                    countSignal.currentTime=0;
                    countSignal.play();
                    standartTimer();
                    
                }
        }
    }
    

    function standartTimer(){
        
        
        setTimeout(()=>{
            TIMER();
        },1000)
        
        bgSound2.play(); //запуск фоновой музыки
        
        bgSound2.loop=true; //зацикливаем песню на весь период таймера

        function TIMER(){
    
            let timer5secBlock=document.getElementById('timer5sec');
            timer5secBlock.style.display='none';
            let timerStBlock=document.getElementById('custSetting');
            timerStBlock.style.display='block';
            let timerAnchor2=document.getElementById('timerAnchor2');
            

            


            roundCoun.innerHTML=roundCounter;
        
        cycleblock();

        function cycleblock(){

            
            
            bgSound2.volume=1;
            let timeLimit=`${jobTimeValue}`; //работа равная кол-ву введенных секунд 
            let timePassed=0; // к-во пройденных секунд от начала запуска таймера
            
            countdownFunc(); //для срабатывания функции сразу
            let countInterval=setInterval(countdownFunc,1000); //запуск посекундного вызова функции
              
            function countdownFunc(){

                

                
                
                timePassed=timePassed+=1; //c каждым вызовом она увеличивается
                
                let timeLeft=Number(timeLimit)+1-timePassed; 
                    if(timeLeft!=0){
                        
                        timerAnchor2.innerHTML=timeFunc(timeLeft);
                        
                        
                    }else{
    
                        timerAnchor2.innerHTML=timeFunc(timeLeft);
                        clearInterval(countInterval);
                        countSignal.currentTime=0;
                        countSignal.play();
                        bgSound2.volume=0;
                        
                        
                        roundCounter+=1;
                        
                                              
  
                        
                        if(roundCounter<roundsValue+1){

                                setTimeout(()=>{
                                    rest();
                                },1000)

                                function rest(){

                                    restTimer();
                                                                        
                            
                                    function restTimer(){
                                        let timeLimit=`${restTimeValue}`; //отдых равный кол-ву введенных секунд 
                                        let timePassed=0; // к-во пройденных секунд от начала запуска таймера
                                        countdownFuncR(); //для срабатывания функции сразу
                                        let countIntervalR=setInterval(countdownFuncR,1000); //запуск посекундного вызова функции
                            
                                        function countdownFuncR(){
                                            
                                            timePassed=timePassed+=1; //c каждым вызовом она увеличивается
                                            
                                            let timeLeft=Number(timeLimit)+1-timePassed; 
                                                if(timeLeft!=0){
                                                    timerAnchor2.innerHTML=timeFunc(timeLeft);
                                                }else{

                                                    timerAnchor2.innerHTML=timeFunc(timeLeft);
                                                    clearInterval(countIntervalR);
                                                    countSignal.currentTime=0;
                                                    countSignal.play();
                                                        setTimeout(()=>{
                                                        cycleblock()
                                                        },1000);
                                                    bgSound2.volume=1;
                                                    roundCoun.innerHTML='';
                                                    roundCoun.innerHTML=roundCounter;
                                                }
                                            }
                                    }
                            
                                    
                                }
                                
                                

                        }else{
                                let roundsTxt=document.getElementById('RoundsTxt');
                                roundsTxt.style.color='black';
                                countSignal.currentTime=0;
                                countSignal.play();
                                bgSound2.pause();
                                bgSound2.currentTime='0';
                                
                                setTimeout(()=>{
                                    timerStBlock.style.display='none';
                                    let finishPage=document.getElementById('endTraining');
                                    finishPage.style.display='block';
                
                                },1000);
                        }
                                           
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
                      .getElementById("base-timer-path-remaining2")
                      .setAttribute("stroke-dasharray", circleDasharray);
                  }
                   
                }
            }
                    
            }
                    
    }

 
}

function mute_cust(){

    bgSound2.volume=0;

}

function quiet_cust(){

    bgSound2.volume=0.3;
    
}

function loudy_cust(){
    bgSound2.volume=1;
}

window.onbeforeunload = () => { 
    let reloadpage=confirm('Текущие данные будут потеряны. Продолжить?');
    
    if(reloadpage){

        document.location.reload();

    }else{
        
        window.preventDefault();

    }
 };