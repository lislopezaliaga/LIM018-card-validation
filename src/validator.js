const validator = {
  // ...

  isValid:function(creditCardNumber){
    const array=creditCardNumber.split('').reverse();
    
    const newarray=[];

    for(var i=0;i<array.length;i++){
      if(i%2!=0){
        var multiplication=array[i]*2;
        if(multiplication>9){
          var convertString=multiplication.toString();
          var result=parseInt(convertString.charAt(0))+parseInt(convertString.charAt(1));
          newarray.push(result);
        }else{
          newarray.push(multiplication);
        }
      }else{
        newarray.push(array[i]);
      }
      
    }

    var additions=0;
    for( i=0;i<newarray.length;i++){
      additions=additions+parseInt(newarray[i]);
    }
    if(additions%10==0){
      return true;
    }else{
      return false;
    }

  },
  maskify:function(creditCardNumber){
    let four=creditCardNumber.slice(0,creditCardNumber.length-4)
    let secondArray=[];
    for(var j=0;j<four.length;j++){
      secondArray.push("#");

    }
    let textComplete=secondArray.join("")+creditCardNumber.slice(-4);
    return textComplete;
    

  }

};

export default validator;
