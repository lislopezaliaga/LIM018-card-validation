const validator = {
  // ...

  isValid:function(creditCardNumber){
    /*El número lo guardamos en un array alreves */
    const array=creditCardNumber.split('').reverse();
    
    const newarray=[];
/*Bucle for  */
    for(var i=0;i<array.length;i++){
      /*Tenemos el array alreves entonces para capturar los valores pares usamos la condicional if si queremos el i sub 1,3,5 para eso */
      if(i%2!=0){
        /*Se guarda en multiplicacion  */
        var multiplication=array[i]*2;
        /*Comprobamos si multiplicacion tien dos cifras */
        if(multiplication>9){
          /*Guardamos en una variable convertida a String */
          var convertString=multiplication.toString();
/*El primer caracter de convertString lo convertimos a numero y lo sumamos el segundo caracter de convertSring */
          var result=parseInt(convertString.charAt(0))+parseInt(convertString.charAt(1));
          /*agregamos el resultado a newarray */
          newarray.push(result);
        }else{
          /*agregamos el resultado a newarray */
          newarray.push(multiplication);
        }
      }else{
        /*agregamos el resultado a newarray */
        newarray.push(array[i]);
      }
      
    }
/*Creamos una nueva variable */
    var additions=0;
    /*Creamos un bucle para sumar todos los numeros del array */
    for( i=0;i<newarray.length;i++){
      additions=additions+parseInt(newarray[i]);
    }
    /*Comprobamos si la suma se puede dividir entre 10 */
    if(additions%10==0){
      return true;
    }else{
      return false;
    }

  },

  maskify:function(creditCardNumber){
    /*Extrae de String menos los cuatro ultimos números */
    let four=creditCardNumber.slice(0,creditCardNumber.length-4)
    let secondArray=[];
    /*Usamos la condicional four para poner # las veces que sea necesario segun el tamaño de String*/
    for(var j=0;j<four.length;j++){
      secondArray.push("#");

    }
    /*Unimos el array en una string y le concatenamos la otra string de los cuatro numeros */
    let textComplete=secondArray.join("")+creditCardNumber.slice(-4);
    return textComplete;
    

  }

};

export default validator;
