const fs = require('fs');
const path = require('path');


function uniqueValues(){
    const s = new Set();
    for(let j = 0; j < 20; j++) {
        fs.readFileSync(`${__dirname}${path.sep}out${j}.txt`).toString('utf-8').split('\n').forEach( el => s.add(el));
    }
    return `Уникальных словосочетаний: ${s.size}`;
}


function existInAllFiles(){
    let arr = new Object();
    for(let j = 0; j < 20; j++) {
        let s = new Set();
        for(let i of fs.readFileSync(`${__dirname}${path.sep}out${j}.txt`).toString('utf-8').split('\n')) {
            s.add(i);
        }
        s.forEach(el => arr[el] = (arr[el] || 0) + 1);
    }
    const amount = Object.values(arr).filter(value => value === 20);
    return  `Словосочетаний, которые есть во всех 20 файлах: ${amount.length}`;
}


function existInAtLeastTen(){
    let arr = new Object();
    for(let j = 0; j < 20; j++) {
        let s = new Set();
        for(let i of fs.readFileSync(`${__dirname}${path.sep}out${j}.txt`).toString('utf-8').split('\n')) {
            s.add(i);
        }
        s.forEach(el => arr[el] = (arr[el] || 0) + 1);
    }
    const amount = Object.values(arr).filter(value => value > 9);
    return  `Словосочетаний, которые есть, как минимум, в десяти файлах: ${amount.length}`;
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
