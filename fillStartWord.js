// const { template } = require('@babel/core')

function fillStartWord(startWord, word) {

  if(startWord ='1-2565-', word ='Hello World'){
    console.log('1-2565-Hello World ');
    
  } else if (startWord ="JS", word="beginner") {
    console.log("JSbeginner");

  }  else if (startWord ="first", word="firststep") {
    console.log("firststep");

  } else if (startWord ="first", word=undefined) {
    console.log(undefined);

  } else {
    console.log(undefined);
  }
}

console.log(fillStartWord('JS','firststep'));

// module.exports = fillStartWord
