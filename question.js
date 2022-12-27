
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

  export const rl = readline.createInterface({ input, output });
  console.log("welcome to weight test!!!\n")

  export const askForName = async (msg = null) => {
        if (msg) console.log(msg)
        const answer = await rl.question("Write your first and last name\n")
        if (answer.length < 4 )return askForName("name should have more than 4 letters\n")  
        if (answer.length > 25 )return askForName("name should have no more than 25 letters\n") 
        if (/\d/.test(answer))return askForName ("name should have letters\n")
        return answer
      }
  
      export  const askForWeight = async (msg = null)   => {
        if (msg) console.log(msg)
        const answer = await rl.question("add the weight in kilos (must be greater than or equal to 10):\n");
        
        if (isNaN(answer)) return askForWeight("The entered value is not a valid number. Try again.")
        if (answer < 10) return askForWeight("The weight must be greater than or equal to 10 kilos. Try again.")
        if (answer > 200) return askForWeight("The weight should be less than 200 Kilos. Try again.")
        return answer
      }
  
      export const askForHeight = async (msg = null) => {
        if (msg) console.log( msg)
        const answer = await rl.question("height in meters!\n")
        if( answer > 300) return  askForHeight("the height should not be more than 300 CM")
        if( answer <50) return  askForHeight("the height should not be less than 50 CM")
        return Math.round(answer)
  
      } 
      export const askForGender = async ( )=>{
        let gender = null
        while (gender !== 'M' && gender !== 'F') {
            gender = await rl.question('gender: Please answer "M" or "F":\n');
            return gender
          }
      }
