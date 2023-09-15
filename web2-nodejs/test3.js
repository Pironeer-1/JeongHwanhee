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

function processInput(input) {
    input.forEach(i => {
        const data = i.split(' ');
        let [name, absent] = data;
        const left = 80000 - 20000 * Number(absent);
        if(left <= 0){
            console.log(`${name}: 0`);
        }else{
            console.log(`${name}: ${left}`);
        }
    })
}