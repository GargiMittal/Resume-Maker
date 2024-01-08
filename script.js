function addNewWEField() {
    // console.log("Adding new field");

    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter Here')
    newNode.setAttribute('rows',3);
    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter Here')
    newNode.setAttribute('rows',3);
    let weOb=document.getElementById("aq");
    let weAddButtonOb = document.getElementById("aqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

// generating CV

function genreateCV()
{
console.log("generating cv");    
let namefield=document.getElementById("nameField").value;
let nameT1=document.getElementById('nameT1')

nameT1.innerHTML=namefield;


document.getElementById('nameT2').innerHTML=namefield;

// number
let contactfield=document.getElementById("contactField").value;
document.getElementById('contactT').innerHTML=contactfield;
// address
let addressfield=document.getElementById("addressField").value;
document.getElementById('addressT').innerHTML=addressfield;
// facebook
let fbfield=document.getElementById("fbField").value;
document.getElementById('fbT').innerHTML=fbfield;

let instafield=document.getElementById("instaField").value;
document.getElementById('instaT').innerHTML=instafield;

let linkedfield=document.getElementById("linkedField").value;
document.getElementById('linkedT').innerHTML=linkedfield;

let objectivefield=document.getElementById("objectiveField").value;
document.getElementById('objectiveT').innerHTML=objectivefield;

//work experence field

let wes=document.getElementsByClassName("weField");

let str="";

for(let e of wes) {
    str=str + `<li> ${e.value} </li>`;
}

document.getElementById('weT').innerHTML=str;



//for AQ field

let aqs=document.getElementsByClassName("aqField");

let str1="";

for(let e of aqs) {
    str1=str1 + `<li> ${e.value} </li>`;
}
document.getElementById('aqT').innerHTML=str1;


//code for geting the picture

let file=document.getElementById('imgField').files[0]
console.log(file);

let reader=new FileReader()

reader.readAsDataURL(file);
console.log(reader.result);
//set the image to tempate
reader.onloadend =function(){
    document.getElementById('imgTemplate').src=reader.result;
}
console.log("checkpoint");  
//to swap pages
document.getElementById('cv-form').style.display='none';
document.getElementById('cv-templete').style.display="block";
console.log("checkpoint");  

}




//print cv
function printCV(){
    window.print();
}

function downloadPDF() {
    const element = document.getElementById('cv-templete');

    html2pdf(element, {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
