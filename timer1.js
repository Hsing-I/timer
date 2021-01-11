const numberArr = process.argv.slice(2);
if(numberArr.length === 0){
  return;
}
const validNumbers = [];
numberArr.forEach((element) =>{
  if(element > 0 && typeof parseInt(element) == 'number'){
    validNumbers.push(parseInt(element));
  }
})

for(const number of validNumbers){
  setTimeout(() => console.log(`${number} seconds`), number);
};

/*node timer1.js 10 3 5 15 9 
This will make it beep at:
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/

