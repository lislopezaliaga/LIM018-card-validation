const validator = {
  // ...

  isValid:function(creditCardNumber){
    var array=[creditCardNumber];
    var newarray=[[0][creditCardNumber.length-1]];
    for(var i=creditCardNumber.length-2;i>0;i--){
      newarray.push(array[0][i]);

    }


  },
  maskify:function(){}

};

export default validator;
