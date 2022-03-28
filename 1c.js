const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
const countWords = (sen) => {
    const words =sen.split(' ');
    let count = 0;
    for(const word of words){
        if(word.length >1){
            count++;
        }

    }
    return count;
}
console.log(countWords.indexOf(sentence));
