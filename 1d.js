const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
function varietyOfWords(sentence) { 

  let count = 0;

  let set = new Set();

  let words = sentence.split (' ');

  for(let i = 0; i < words.length; i++){
    set.add(words[i]);
    count = set.size;
  }

  return count;
}

  console.log(varietyOfWords(sentence));