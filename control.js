import fs from 'fs'

const stats = fs.statSync('users.txt');

// Imprimimos el tamaño del archivo en bytes
console.log(`Tamaño del archivo 'users.txt': ${stats.size} bytes`);