import validator from './validator.js';

console.log(validator);

const pays=document.querySelector("#shop");
pays.addEventListener("click",function(evento){
        document.getElementById("cabeza").style.display = "none";
        document.getElementById("divfirst").style.display = "none";
        document.getElementById("div2").style.display = "block";
    
});

const get=document.querySelector("#get");
get.addEventListener("click",function(evento){
        document.getElementById("cabeza").style.display = "none";
        document.getElementById("divfirst").style.display = "none";
        document.getElementById("div2").style.display = "block";
    
});

const valid=document.querySelector("#validar");
valid.addEventListener("click",function(evento){
    

    document.getElementById("div2").style.display = "none";

    let creditCardNumber=document.getElementById("number").value;
    let isValidFirst = validator.isValid(creditCardNumber);
    let maskify=validator.maskify(creditCardNumber);

    let name=document.getElementById("name").value; 
    let lastName=document.getElementById("lastName").value;
    let dni=document.getElementById("dni").value;
    
    
    if(isValidFirst==true){
        document.getElementById("last").style.display = "block";
        document.getElementById("numb").innerHTML="Número de tarjeta:"+maskify;
        document.getElementById("printName").innerHTML="Nombre:"+name;
        document.getElementById("printLastName").innerHTML="Apellido:"+lastName;
        document.getElementById("printDni").innerHTML="DNI:"+dni;



    }else{
        document.getElementById("sorry").style.display = "block";
    }

    
        
});





const buttonAdd=document.querySelectorAll('.button-add');
buttonAdd.forEach((addToCardButton) =>{
    addToCardButton.addEventListener('click',function(evento){
        console.log(+1);
    })
});

const buttonReturns=document.querySelector("#buttonReturn");
buttonReturns.addEventListener("click",function(evento){
        document.getElementById("cabeza").style.display = "none";
        document.getElementById("divfirst").style.display = "none";
        document.getElementById("div2").style.display = "block";
    
});
const buttonBacks=document.querySelector("#buttonBackShop");
buttonBacks.addEventListener("click",function(evento){
        document.getElementById("cabeza").style.display = "none";
        document.getElementById("divfirst").style.display = "none";
        document.getElementById("div2").style.display = "block";
    
});
    

