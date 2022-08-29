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

    const validDevInput=document.getElementById('adressMail');

    

    if(validDevInput.value.includes('@')){

        const errValidMail=document.getElementById('errAdressMail');
        errValidMail.innerHTML='';


    }else{

        const errValidMail=document.getElementById('errAdressMail');
        errValidMail.innerHTML='*Введите адрес эл. почты';

    }

}

function validCatalog(){

    const validCatalog=addSiteForm.elements.catalog;

    console.log(validCatalog.value);

    switch

}

function validForm(eo){

    errValid.length=0; //очищаем массив каждый раз при нажатии на кнопку (вызове функции)

    validDev();
    validSiteName();
    validDate();
    validVisitors();
    validMail();

    //errValid[0].focus();

    //console.log(errValid[0]);
}











