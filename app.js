import { asignarId } from './utilytis.js';
import {
  rl,
  askForName,
  askForGender,
  askForHeight,
  askForWeight,
  askMenu,
  searchId,
  idToDelete,
} from "./question.js";
import { saveUser } from "./data.js";


const wathTodo = await askMenu();

switch (wathTodo) {
  case "1":
    const name = await askForName();
    const gender = await askForGender();
    const kilos = await askForWeight();
    const meter = await askForHeight();
    saveUser([asignarId(), name, gender, kilos, meter]);
    console.log(`thank you ${name}, your data is complete`);
    break;
  case "2":
    await searchId();
    break;
  case "3":
    await idToDelete();
    break;
}


rl.close();