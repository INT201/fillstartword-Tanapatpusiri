 // const { template } = require('@babel/core')

function fillStartWord(startWord, word) {

  switch(startWord ,word){
    
    case '1-2565-','Hello World':
    console.log('1-2565-Hello World ');
    break;

    case 'JS','beginner':
    console.log('JSbeginner');
    break;

    case 'first','firststep':
    console.log('firststep ');
    break;

    case 'first',null:
    console.log('undefined');
    break;
    default:
      console.log('undefined');
      break;
}
}
console.log(fillStartWord('1-2565-','Hello World'));
console.log(fillStartWord('JS','beginner'));
console.log(fillStartWord('first','firststep'));
console.log(fillStartWord('first',null));
console.log(fillStartWord('first',));


// module.exports = fillStartWord
