const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

let newArr = [];

async function main() {
    let thing = await readFile('./data/Vmag6_raw.json', 'utf-8');
    let json = JSON.parse(thing);
    for (let i = 0; i < json.length; i++) {
        let star = json[i];
        let obj = {};

        obj.v = star.v;
        obj.name = star.name.replace(/\* /g, '');

        let coordstring = star.coord;
        let tokens = coordstring.split(' ');
        let ra = Math.abs(parseInt(tokens[0])) + parseInt(tokens[1]) / 60 + parseFloat(tokens[2]) / 3600;
        ra *= Math.sign(parseInt(tokens[0]));
        ra *= 15;

        obj.ra = ra;

        let dec = Math.abs(parseInt(tokens[3])) + parseInt(tokens[4]) / 60 + parseFloat(tokens[5]) / 3600;
        dec *= Math.sign(parseInt(tokens[3]));
        obj.dec = dec;
        newArr.push(obj);
    }
    await writeFile('Vmag6_min.json', JSON.stringify(newArr));
}
main();
