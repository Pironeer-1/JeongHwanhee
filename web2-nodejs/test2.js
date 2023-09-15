//스켈레톤 코드. processInput함수 안에 로직을 작성하세요
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function (line) {
    lines.push(line.trim());
}).on('close', function () {
    processInput(lines);
    process.exit(0);
});

//input: 리스트 안에 각 줄이 콤마로 구분되서 들어옴
function processInput(input) {
    const X = Number(input[0]);
    const N = Number(input[1]);
    
    let total = 0;
    for (let i = 2; i < N + 2; i++) {
        const data = input[i].split(' ');
        const [thing, cnt] = data;
        total += Number(thing) * Number(cnt);
    }
    if(X === total){
        console.log("Yes");
        
    }else{
        console.log("No");
    }

}