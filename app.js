import { asignarId } from './utilytis.js';
import { rl, askForName, askForGender, askForHeight, askForWeight } from './question.js';
import { saveUser } from './data.js'

const name = await askForName()
const gender= await askForGender()
const kilos = await askForWeight()
const meter = await askForHeight()

rl.close();
    
saveUser([
  asignarId(),
  name,
  gender,
  kilos,
  meter
])

console.log(`thank you ${name}, your data is complete`)

    
      

       
   