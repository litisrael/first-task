import fs from 'fs'

const stats = fs.statSync('users.txt');

// Imprimimos el tamaño del archivo en bytes
console.log(`Tamaño del archivo 'users.txt': ${stats.size} bytes`);
let i =null
let line= null

  
export const getUsersCount = () => {
    const data = fs.readFileSync('./users.txt', 'utf8');
    const lines = data.split('\n');
    return lines.length
}

function getLineByKey(id) {
    let data = JSON.parse(fs.readFileSync("usersMap.json", "utf8"));
    let index = data[id];
    let lines = fs.readFileSync("./users.txt", "utf8").split("\n");
    return lines[index-1];
  }
  
  console.log(getLineByKey("qcn372ku5"))