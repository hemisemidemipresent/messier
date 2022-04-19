const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

let newArr = [];
async function main() {
    let thing = await readFile('./messier.json', 'utf-8');
    let json = JSON.parse(thing);
    for (let i = 0; i < json.length; i++) {
        let star = json[i];

        let tokens = star.ra.split(/[h|m|s]+/);
        if (!tokens[2]) tokens[2] = '0';
        let ra = Math.abs(parseInt(tokens[0])) + parseInt(tokens[1]) / 60 + parseFloat(tokens[2]) / 3600;
        ra *= 15;

        star.ra = ra;

        tokens = star.dec.split(' ');
        if (!tokens[2]) tokens[2] = '0';

        let dec = Math.abs(parseInt(tokens[0])) + parseInt(tokens[1]) / 60 + parseFloat(tokens[2]) / 3600;
        dec *= Math.sign(parseInt(tokens[0]));
        star.dec = dec;
        newArr.push(star);
        console.log(star);
    }
    console.log(JSON.stringify(newArr));
}
main();
