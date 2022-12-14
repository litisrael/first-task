import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { appendFile } from 'node:fs'



const rl = readline.createInterface({ input, output });
    console.log("welcome to weight test!!!\n")

    const name = await rl.question("write your first and last name\n",(answer) => {

    })

    const gender =  await rl.question('gender: answer "M" or "F"\n', (answer) => {

    })

    const kilos = await rl.question("weight in kilos!!\n", (answer) => {

    })

    const meter = await rl.question("height in meters!\n", (answer) => {

    })

    rl.close();
    

    let user = {
        name: name,
        gender: gender,
        kilos: kilos,
        meter:meter ,
    
    } 
   
    
    appendFile("./user.json", JSON.stringify(user) + "\n",(err)=>{
        if(err){
            console.log(err)
            exit(1) 
        }})
