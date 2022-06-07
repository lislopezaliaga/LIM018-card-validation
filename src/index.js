import validator from './validator.js';

let buttonBarbies=document.querySelector("#buttonBarbie");
buttonBarbies.addEventListener("click",function(){
        document.getElementById("productBarbie").style.display = "flex";

        document.getElementById("productKen").style.display = "none";

        document.getElementById("productAccesorio").style.display = "none";
      
});

const buttonKens=document.querySelector("#buttonKen");
buttonKens.addEventListener("click",function(){
     document.getElementById("productBarbie").style.display = "none";
     document.getElementById("productAccesorio").style.display = "none";
        document.getElementById("productKen").style.display = "flex";
      
});
const buttonAccesorios=document.querySelector("#buttonAccesorio");
buttonAccesorios.addEventListener("click",function(){

     document.getElementById("productBarbie").style.display = "none";
        document.getElementById("productKen").style.display = "none";
        document.getElementById("productAccesorio").style.display = "flex";
      
});

let counterVal = 0;


const buttonAdd=document.querySelectorAll('.button-add');
buttonAdd.forEach((addToCardButton) =>{
    addToCardButton.addEventListener('click',function(){

        document.getElementById("count").innerHTML=++counterVal;
        

    })
});


const get=document.querySelector("#get");
get.addEventListener("click",function(){

    if(counterVal>0){
        document.getElementById("textFreeShipping").style.display = "none";
        document.getElementById("notice").style.display = "none";
        document.getElementById("divfirst").style.display = "none";
        document.getElementById("div2").style.display = "block";
    }else{
        alert("Agrega Productos al carrito de compras")
    }

    
});

const valid=document.querySelector("#validar");
valid.addEventListener("click",function(){
    
    let creditCardNumber=document.getElementById("cardNumber").value;
    
    let isValidFirst = validator.isValid(creditCardNumber);
    let maskify=validator.maskify(creditCardNumber);

    let name=document.getElementById("name").value; 
    let lastName=document.getElementById("lastName").value;
    let dni=document.getElementById("dni").value;
    let address=document.getElementById("address").value;
    let cvv=document.getElementById("numberCvv").value;
    

    if(name.length==0){
        alert("Escribe tu nombre");
    }else if(lastName.length==0){
        alert("Escribe tu apellido")
    }else if(address.length==0){
        alert("Escribe tu dirección")
    }else if(creditCardNumber.length==0||creditCardNumber.length<16){
        alert("Tu número de tarjeta No es Válido o el campo está vacío")
    }else if(dni.length<8||dni.length==0){
        alert("Tu número de DNI no es valido")
    }else if(cvv.length<3){
        alert("El CVV no es válido o está vacío")
   
    }else if(isValidFirst==true){
        document.getElementById("div2").style.display = "none";
        document.getElementById("last").style.display = "block";
        
        document.getElementById("numb").innerHTML="Número de tarjeta:"+maskify;
        document.getElementById("printName").innerHTML="Nombre:"+name;
        document.getElementById("printLastName").innerHTML="Apellido:"+lastName;
        document.getElementById("printAddress").innerHTML="Dirección:"+address;
        document.getElementById("printDni").innerHTML="DNI:"+dni;



    }else{
        document.getElementById("div2").style.display = "none";
        document.getElementById("sorry").style.display = "block";
    }

    
        
});






const buttonReturns=document.querySelector("#buttonReturn");
buttonReturns.addEventListener("click",function(){
        
        document.getElementById("sorry").style.display = "none";
        document.getElementById("div2").style.display = "block";

        document.getElementById("name").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("address").value = "";
        document.getElementById("cardNumber").value = "";
        document.getElementById("numberCvv").value = "";
        document.getElementById("dni").value = "";
        document.getElementById("numberMonth").value="0";
        document.getElementById("numberYear").value="0";
    
});
const buttonBacks=document.querySelector("#buttonBackShop");
buttonBacks.addEventListener("click",function(){
    location.reload();
    
});
    

