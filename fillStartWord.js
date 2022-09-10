  const { template } = require('@babel/core')

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
    console.log('undefined ');
    break;
    default:
      console.log('undefined ');
      break;






  // } else if (startWord ='JS', word='beginner') {
  //   console.log('JSbeginner');

  // }  else if (startWord ='first', word='firststep') {
  //   console.log('firststep');

  // } else if (startWord ='first', word=undefined) {
  //   console.log(undefined);

  // } else {
  //   console.log(undefined);
  // }
}
}
console.log(fillStartWord('first','firststep'));


 module.exports = fillStartWord
