import fs from 'fs'
//import { addEmptyChars } from './utilytis';



const addZeros = number => parseInt(number.toString() + '00');
const stats = fs.statSync('usersMap.txt');
const file = fs.createReadStream('./users.txt');


//  function getUserById(id) {
//     const statUsers = fs.statSync('users.txt');
//     //let data = JSON.parse(fs.readFileSync('usersMap.json', 'utf8'));
//     let index = lastNumber
//     const start = addZeros(index);
//     const end = start + 99;   
//     const stream = fs.createReadStream('users.txt', { start, end });
//     stream.on('data', chunk => {
//       console.log(chunk.toString());
//     });
//   }
//console.log(`Tamaño del archivo 'users.txt': ${stats.size} bytes`);
  



// Obtener tamaño del archivo
const statsUsersMap = fs.statSync('usersMap.txt');
const fileSize = statsUsersMap.size;

let data;

if (fileSize === 0) {
  data = 1;
} else {
  const file = fs.openSync('usersMap.txt', 'r');
  const buffer = Buffer.alloc(35);
  fs.readSync(file, buffer, 0, 35, fileSize - 35);
  // Cerrar archivo
  fs.closeSync(file);
  data = JSON.parse(buffer.toString());
}

 export let lastValueUserMap;
if (data === 1) {
  lastValueUserMap = 1;
} else {
  lastValueUserMap = data.value += 1;
}





//  console.log(getLineByKey("5w7r6xswz"))