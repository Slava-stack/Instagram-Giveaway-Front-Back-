const fs = require('fs');
const path = require('path');

function uniqueValues(){
    const s = new Set();
    for(let j = 0; j < 20; j++) {
        fs.readFileSync(`${__dirname}${path.sep}out${j}.txt`).toString('utf-8').split('\n').forEach( el => s.add(el));
    }
    return `Уникальных словосочетаний: ${s.size}`;
}

function existInAtLeastTen(){
    let arr = new Object();
    for(let j = 0; j < 20; j++) {
    let s = new Set();
        for(let i of fs.readFileSync(`${__dirname}${path.sep}out${j}.txt`).toString('utf-8').split('\n')) {
            s.add(i);
        }
        for(let el of s){
            arr[el] = (arr[el] || 0) + 1;
        }
    }
    amountOfThePhrases = 0;
    for(let k in arr) {
        if (arr[k] > 9) {
            amountOfThePhrases += 1;
        }
    }
    return  `Словосочетаний, которые есть, как минимум, в десяти файлах: ${amountOfThePhrases}`;
}

function existInAllFiles() {
    let arr = new Object();
for(let j = 0; j < 20; j++) {
        let s = new Set();
        for(let i of fs.readFileSync(`${__dirname}${path.sep}out${j}.txt`).toString('utf-8').split('\n')){
            s.add([i]);
        }
        for(let el of s){
            arr[el] = (arr[el] || 0) + 1;
        }
    }
    let amountOfThePhrases = 0;
    for(let k in arr) {
        if (arr[k] === 20) {
            amountOfThePhrases += 1;
        }
    }
    return `Словосочетаний, которые есть во всех 20 файлах: ${amountOfThePhrases}`;
}

console.time("first");
console.log(uniqueValues());
console.timeEnd("first");

console.time("second");
console.log(existInAllFiles());
console.timeEnd("second");

console.time("third");
console.log(existInAtLeastTen());
console.timeEnd("third");
