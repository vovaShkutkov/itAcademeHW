'use strict';

function addForms(formName, discr){

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

      case 'check':{
        let block=document.createElement('div');
        formName.appendChild(block);
        block.innerHTML=elem.label;
        let elemInput=document.createElement('input');
        elemInput.type='checkbox';
        elemInput.checked='true';
        elemInput.name=elem.name;
        block.append(elemInput);

        break;
      }

      case 'radio':{

        let block=document.createElement('div');
        formName.appendChild(block);
        let elemLabel=document.createElement('div');
        elemLabel.innerHTML=elem.label;
        block.appendChild(elemLabel);

        let mas=elem.variants;
        for(let i=0; i<mas.length; i++){
          
          let radElem=document.createElement('input');
          radElem.type=elem.kind;
          radElem.name=elem.name;
          radElem.value=mas[i].value;
          let radSp=document.createElement('span');
          radSp.innerHTML=mas[i].text;
          elemLabel.append(radElem, radSp);

        }
 
        break;
      }

      case 'combo':{

        let block=document.createElement('div');
        formName.appendChild(block);
        let blockP=document.createElement('p');
        blockP.innerHTML=elem.label;
        let blockSel=document.createElement('select');
        block.appendChild(blockP);
        blockP.appendChild(blockSel);

        let mas=elem.variants;

        for(let i=0; i<mas.length; i++){

          let selectOption=document.createElement('option');
          selectOption.value=i+1;
          selectOption.innerHTML=mas[i].text;
          blockSel.appendChild(selectOption);

        }

        break;

      }
      


    
     }
  
  });

}



var formDef1=
[
  {label:'???????????????? ??????????:',kind:'longtext',name:'sitename'},
  {label:'URL ??????????:',kind:'longtext',name:'siteurl'},
  {label:'?????????????????????? ?? ??????????:',kind:'number',name:'visitors'},
  {label:'E-mail ?????? ??????????:',kind:'shorttext',name:'email'},
  {label:'?????????????? ????????????????:',kind:'combo',name:'division',
    variants:[{text:'????????????????',value:1},{text:'???????????????? ??????',value:2},{text:'?????????????? ??????????????',value:3}]},
  {label:'????????????????????:',kind:'radio',name:'payment',
    variants:[{text:'????????????????????',value:1},{text:'??????????????',value:2},{text:'VIP',value:3}]},
  {label:'?????????????????? ????????????:',kind:'check',name:'votes'},
  {label:'???????????????? ??????????:',kind:'memo',name:'description'},
  {caption:'????????????????????????',kind:'submit'},
];

var formDef2=
[
  {label:'??????????????:',kind:'longtext',name:'lastname'},
  {label:'??????:',kind:'longtext',name:'firstname'},
  {label:'????????????????:',kind:'longtext',name:'secondname'},
  {label:'??????????????:',kind:'number',name:'age'},
  {caption:'????????????????????????????????????',kind:'submit'},
];


function addForm1(){

  let f1=document.forms.form1;

  addForms(f1, formDef1);

}

function addForm2(){

  let f2=document.forms.form2;

  addForms(f2, formDef2);

}
