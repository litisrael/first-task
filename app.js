import { asignarId } from './utilytis.js';
import { rl, askForName, askForGender, askForHeight, askForWeight ,searchOrTest} from './question.js';
import { saveUser } from './data.js'

const wathTodo =await searchOrTest()
let shouldContinue = true;
if (wathTodo === "2") {
    shouldContinue = false;
}
if (shouldContinue) {
    const name = await askForName()
    const gender= await askForGender()
    const kilos = await askForWeight()
    const meter = await askForHeight()
    
    saveUser([
        asignarId(),
        name,
        gender,
        kilos,
        meter
    ])
    console.log(`thank you ${name}, your data is complete`)
} 
rl.close();