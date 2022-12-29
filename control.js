import fs from 'fs'
const addZeros = number => parseInt(number.toString() + '00');
const stats = fs.statSync('users.txt');
const file = fs.createReadStream('./users.txt');

 function getLineByKey(id) {
    let data = JSON.parse(fs.readFileSync('usersMap.json', 'utf8'));
    let index = lastNumber
    const start = addZeros(index);
    const end = start + 99;   
    const stream = fs.createReadStream('users.txt', { start, end });
    stream.on('data', chunk => {
      console.log(chunk.toString());
    });
  }
//console.log(`Tamaño del archivo 'users.txt': ${stats.size} bytes`);
  
  
 export let lastNumber = 0;

  export const nextNumber = lastNumber => lastNumber + 1;
// export const getUsersCount = () => {
//     const data = fs.readFileSync('./users.txt', 'utf8');
//     const lines = data.split('\n');
//     return lines.length
// }


 // console.log(getLineByKey("qcn372ku5"))