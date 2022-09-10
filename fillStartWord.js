const { template } = require('@babel/core')

function fillStartWord(startWord,word) {

  switch(startWord,word){
    
    case  '1-2565-','Hello World' :
    console.log("1-2565-Hello World ");
    break;

    case 'JS','beginner':
    console.log("JSbeginner");
    break;

    case 'first','firststep':
    console.log("firststep");
    break;

    case 'first',null:
    console.log("undefined");
    break;
  
    default:
      console.log("undefined");
      
}
}

(fillStartWord('1-2565-', 'Hello World'));
(fillStartWord('JS','beginner'));
(fillStartWord('first','firststep'));
(fillStartWord('first',null));
(fillStartWord('first',));


module.exports = fillStartWord
