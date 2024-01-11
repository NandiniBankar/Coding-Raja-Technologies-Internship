function addNewWefield(){
   // console.log("Adding new field");
   let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");


let weOb = document.getElementById("we");

let weAddbuttonOb=document.getElementById('weAddbutton');

weOb.insertBefore(newNode, weAddbuttonOb);

}

function addNewAQfield()
{
    // console.log("Adding new field");
    let newNode=document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('eqfield');
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder","Enter here");
 
 
 let aqOb = document.getElementById("aq");
 
 let aqAddbuttonOb=document.getElementById('aqAddbutton');
 
 aqOb.insertBefore(newNode, aqAddbuttonOb);
 
 }


 //generating cv
function generateCV()
{
  let namefield=document.getElementById('namefield').value;

   let nameT1=document.getElementById('nameT1');

   nameT1.innerHTML = namefield;
   
   //direct
   document.getElementById("nameT2").innerHTML = namefield;

   //contact

   document.getElementById('contactT').innerHTML = document.getElementById("contactfield").value;

   //address
   document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;

   //facebook
   document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;
   //instagram
   document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;
   //linkedin
   document.getElementById('LinkedT').innerHTML = document.getElementById('linkdinfield').value;

    //objective
    document.getElementById("ObjectiveT").innerHTML = document.getElementById("Objectivefield").value;
      
      //we
      let wes = document.getElementsByClassName('wefield')

      let str = " ";

      for(let e of wes ){
        str = `${str}<li> ${e.value} </li>`;
      }

      document.getElementById("weT").innerHTML = str;



       //aq
       let aqs=document.getElementsByClassName('eqfield')

       let str1 = " ";
       for(let e of aqs ){
        str1 = `${str1}<li> ${e.value} </li>`;
       }

    document.getElementById('aqT').innerHTML = str1;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-templet").style.display ="block";

}

//print resume
function printcv(){
    window.print();
}