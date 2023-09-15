//스켈레톤 코드. processInput함수 안에 로직을 작성하세요
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    processInput(input.trim());
    rl.close();
});

//input: 문자열로 들어옴
function processInput(input) {
   const N = Number(input);

   for (let i = 1; i < 10; i++) {
       console.log(`${N} * ${i} = ${N * i}`);
   }
}