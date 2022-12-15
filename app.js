import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { appendFile } from 'node:fs'



const rl = readline.createInterface({ input, output });
    console.log("welcome to weight test!!!\n")

    const askForName = async (msg = null) => {
      if (msg) console.log(msg)
      const answer = await rl.question("Write your first and last name\n")
      return answer.length < 4 ? askForName("name should have more than 4 letters") : answer
    }

    let name = await askForName()
    
    let gender= null
    while (gender !== 'M' && gender !== 'F') {
        gender = await rl.question('gender: Please answer "M" or "F":\n');
      }
      

      let kilos = null;

      while (isNaN(kilos) || kilos < 10) {
        kilos = await rl.question("add the weight in kilos (must be greater than or equal to 10):\n");
      
        if (isNaN(kilos)) {
          console.log("The entered value is not a valid number. Try again.\n");
        } else if (kilos < 10) {
          console.log("The weight must be greater than or equal to 10 kilos. Try again.\n");
        }
      }
    
    const meter = await rl.question("height in meters!\n", (answer) => {

    })

    rl.close();
    

    let user = {
        name: name,
        gender: gender,
        kilos: kilos,
        meter:meter 
    
    } 
  
    
    appendFile("./user.json", JSON.stringify(user) +","+ "\n",(err)=>{
        if(err){
            console.log(err)
            exit(1) 
        }})
