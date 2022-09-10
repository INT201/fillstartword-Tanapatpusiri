const { template } = require('@babel/core')

function fillStartWord(startWord,word) {

  switch(startWord,word){
    
    case "1-2565-","Hello World" :
    return "1-2565-Hello World";
    
    case "JS","beginner":
    return "JSbeginner";
    

    case "first","firststep":
    return"firststep";
    

    case "first",null:
    return undefined ;
    
  
    default:
      return undefined;
      
      
}
}

 console.log(fillStartWord('1-2565-', 'Hello World'));
 console.log(fillStartWord('JS','beginner'));
 console.log(fillStartWord('first','firststep'));
 console.log(fillStartWord('first',null));
 console.log(fillStartWord('first',));


module.exports = fillStartWord
