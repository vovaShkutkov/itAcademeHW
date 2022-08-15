'use strict';

function AddForms(formName, discr){

  discr.forEach(elem =>{
    
    switch(elem.kind){

      case 'longtext':
      case 'shorttext':
      case 'number':{
        
        let block=document.createElement('div');
        formName.appendChild(block);
        let elemLabel=document.createElement('label');
        elemLabel.innerHTML=elem.label;
        let elemInput=document.createElement('input');
        elemInput.type=elem.kind;
        elemInput.name=elem.name;
        block.append(elemLabel, elemInput);
        break;
      }

      case 'memo':{

        let block=document.createElement('div');
        formName.appendChild(block);
        let elemLabel=document.createElement('p');
        elemLabel.innerHTML=elem.label;
        let elemArea=document.createElement('textarea');
        elemArea.name=elem.name;
        block.append(elemLabel, elemArea);
        break;
      }

      case 'submit':{

        let buttElem=document.createElement('input');
        formName.appendChild(buttElem);
        buttElem.value=elem.caption;
        buttElem.type='button';
        break;
      }


    }
  
  
  });

}



var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];


function addForm1(){

  let f1=document.forms.form1;

  AddForms(f1, formDef1);

}

function addForm2(){

  let f2=document.forms.form2;

  AddForms(f2, formDef2);

}
