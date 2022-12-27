
import { appendFile } from 'node:fs'
import { rl, askForName,askForGender,askForHeight,askForWeight } from './question.js';
   
    const name = await askForName()
    const gender= await askForGender()
    const kilos = await askForWeight()
    const meter = await askForHeight()

    rl.close();
    
    
    const asignarId =()=> Math.random().toString(36).substr(2, 9);
    const id = asignarId()
    

    const user = {
      id: id ,
      name:name ,
      gender:gender,
       kilos:kilos ,
       meter:meter }
    
       const stringify =JSON.stringify(user)
     const countLong = 99 - stringify.length 
     const completeTo35 = (num) => ' '.repeat(num)
     let complete = completeTo35(countLong )
    // user.push(complete)
    // const userData = user.join(', ');
   
    appendFile("./users.txt", stringify + complete + "\n",(err)=>{
        if(err){
            console.log(err)
          
            exit(1) 
        }
      console.log(`thank you ${name}, your data is complete`)
      })
       
      