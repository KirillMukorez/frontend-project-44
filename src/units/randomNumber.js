const min = 0
const max = 100
const randomNumber = (minNum = min, maxNum = max) => Math.floor(Math.random() * maxNum) + minNum;
export default randomNumber
