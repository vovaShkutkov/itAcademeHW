        //создаем хеш для сбора ошибок (если они будут при не корректном заполнении формы)
// и последующей проверки его на пустоту при попытке отправить ее
//  если хеш пустой (т.е. без ошибок) - форму отправляем, если нет(т.е. есть ошибки) -  не отправляем.
let errValid=[];

function validDev(){ //проверка поля Разработчики на пустоту поля

    const validDevInput=document.getElementById('dev');

    if(validDevInput.value){

        let errValidDev=document.getElementById('errDev');
        errValidDev.innerHTML='';
        
    }else{

        let errValidDev=document.getElementById('errDev');
        errValidDev.innerHTML='*обязательно к заполнению';
        errValid.push(validDevInput);

    }

}

function validSiteName(){ //проверка поля Название сайта на пустоту поля

    const validSiteNameInput=document.getElementById('siteName');

    if(validSiteNameInput.value){

        let errValidSiteNameInput=document.getElementById('errSiteName');
        errValidSiteNameInput.innerHTML='';
        

    }else{

        let errValidSiteNameInput=document.getElementById('errSiteName');
        errValidSiteNameInput.innerHTML='*обязательно к заполнению';
        errValid.push(validSiteNameInput);

    }

}

function validDate(){ //проверка поля Дата публикации на число не большее текущей даты

    const validDateInput=document.getElementById('date');

    const enteredDate=Date.parse(validDateInput.value);
    //console.log('Введенное значение:'+enteredDate);

    var currDate =new Date();
    const currrentDate=Date.parse(currDate);
    //console.log('Текущая значение:'+currrentDate);
    
    if(currrentDate>enteredDate){

        let errDateInput=document.getElementById('errDate');
        errDateInput.innerHTML='';
        

    }else{

        let errDateInput=document.getElementById('errDate');
        errDateInput.innerHTML='Введена не корректная дата';
        errValid.push(validDateInput);

    };
    

}

function validVisitors(){ //проверка что введено число

    const validCountVisitors=document.getElementById('countVisitors');

    // console.log(validCountVisitors.value)
    
    if(isNaN(validCountVisitors.value) || validCountVisitors.value==''){

       //console.log("не  число");
        let errValidVisitorsInput=document.getElementById('errCountVisitors');
        errValidVisitorsInput.innerHTML='*Введите число';
        errValid.push(validCountVisitors);
        
        

        
    }else{
        
        
        //console.log("число");
        let errValidVisitorsInput=document.getElementById('errCountVisitors');
        errValidVisitorsInput.innerHTML='';
        
    };

}

function validMail(){ //проверка что точно введен адрес эл. почты

    const validMail=document.getElementById('adressMail');

    

    if(validMail.value.includes('@')){

        const errValidMail=document.getElementById('errAdressMail');
        errValidMail.innerHTML='';


    }else{

        const errValidMail=document.getElementById('errAdressMail');
        errValidMail.innerHTML='*Введите адрес эл. почты';
        errValid.push(validMail);

    }

}

function validCatalog(){ //проверка на верно ли выбран элемент из выпадающего списка

    const validCatalog=addSiteForm.elements.catalog;

         
    if(validCatalog.value!=2){
        const errValidCatalog=document.getElementById('errCatalog');
        errValidCatalog.innerHTML='*Выбрано не верное значение';
       errValid.push(validCatalog);
    }else{
       const errValidCatalog=document.getElementById('errCatalog');
       errValidCatalog.innerHTML='';
    }   
        

    
 
}

function validReplacement(){ //проверка по указанному значению 

    const validReplacement=document.querySelectorAll('input[name="placement"]');

    let valueValidReplacement=0;

    for (let i=0; i<validReplacement.length; i++){
        if(validReplacement[i].checked){
            valueValidReplacement=validReplacement[i].value;
            
        }else{
            
        }
    }
    
    let rightAnswer=3;
    if(valueValidReplacement<rightAnswer){

        const errValidPlacement=document.getElementById('errPlacement');
        errValidPlacement.innerHTML='*Выбрано не верное значение';
        errValid.push(valueValidReplacement);

    }else{

        const errValidPlacement=document.getElementById('errPlacement');
        errValidPlacement.innerHTML='';

    }

    

}

function validPermit(){ //проверка на checked/unchecked

    const validPermit=document.getElementById('permit');

    
    
        if(validPermit.checked){
            const errValidPermit=document.getElementById('errPermit');
            errValidPermit.innerHTML='';
        }else{
            // console.log('не чекнут');
            const errValidPermit=document.getElementById('errPermit');
            errValidPermit.innerHTML='*Выбрано не верное значение';
            errValid.push(validPermit);
        }  
    

}

function validDiscr(){ //проверяем на миним. длину отзыва 

    const validDiscr=document.getElementById('description');

    if(((validDiscr.value).length)<10){
        const errValidDiscr=document.getElementById('errDescription');
        errValidDiscr.innerHTML='Введите минимум 10 символов';
        errValid.push(validDiscr);
    }else{
        const errValidDiscr=document.getElementById('errDescription');
        errValidDiscr.innerHTML='';
    }


}

function validForm(eo){

    eo=eo||window.event;

    errValid.length=0; //очищаем массив каждый раз при нажатии на кнопку (вызове функции)
    

    validDev();
    validSiteName();
    validDate();
    validVisitors();
    validMail();
    validCatalog();
    validReplacement();
    validPermit();
    validDiscr()

    console.log('Не заполнено полей :'+errValid.length);
    console.log(errValid);

    if(errValid.length==0 ){

        alert('Ошибок нет, форма отправлена'); 
    }else{
        
        alert('Ошибки в форме, форма не отправлена');
        event.preventDefault(); 
            errValid[0].focus();
       
         
    }
    
}











