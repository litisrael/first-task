import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { appendFile } from 'node:fs'



const rl = readline.createInterface({ input, output });
    console.log("welcome to weight test!!!\n")

    const askForName = async (msg = null) => {
      if (msg) console.log(msg)
      const answer = await rl.question("Write your first and last name\n")
      return answer.length < 4 ? askForName("name should have more than 4 letters\n") : answer
    }

    const askForWeight = async (msg = null) => {
      if (msg) console.log(msg)
      const answer = await rl.question("add the weight in kilos (must be greater than or equal to 10):\n");
      
      if (isNaN(answer)) return askForWeight("The entered value is not a valid number. Try again.\n")
      if (answer < 10) return askForWeight("The weight must be greater than or equal to 10 kilos. Try again.\n")

      return answer
    }

    const name = await askForName()
    
    let gender= null
    while (gender !== 'M' && gender !== 'F') {
      gender = await rl.question('gender: Please answer "M" or "F":\n');
    }
    
    const kilos = await askForWeight()
    
    const meter = await rl.question("height in meters!\n")

    rl.close();
    console.log(name,gender,kilos,meter)

    const user = {
        name: name,
        gender: gender,
        kilos: kilos,
        meter:meter 
    
    } 
  
    const users = []
    
    users.push(user)
    appendFile("./users.json", JSON.stringify(users)+ "\n",(err)=>{
        if(err){
            console.log(err)
            exit(1) 
        }})
       