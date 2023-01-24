import readlineSync from 'readline-sync';
function startgame() {
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?  ');
console.log(`Hello, ${name}`)
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0
while (i < 3) {
const rannum = Math.random() * 100
const ranGoodnum = Math.floor(rannum);
console.log(`Question: ${ranGoodnum}`);
const AnswerName = readlineSync.question('Your answer: ')
if ((ranGoodnum % 2 === 0 && AnswerName === "yes") || (ranGoodnum % 2 !== 0 && AnswerName === "no")) {
    console.log("Correct!");
   i += 1
} else if (ranGoodnum % 2 == 0 && AnswerName == "no"){
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
    console.log(`Let's try again, ${name}`)
    return
} else if (AnswerName != "no" || AnswerName != "yes"){
    console.log(`Let's try again, ${name}!`)
    return
}
else  {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
    console.log(`Let's try again, ${name}`)
    return
}    

} 
if (i === 3){
    console.log(`Congratulations, ${name}!`);
}
}
export default startgame