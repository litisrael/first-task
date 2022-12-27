
import { appendFile, readFile, writeFile,readFileSync } from 'node:fs'
import { rl, askForName,askForGender,askForHeight,askForWeight } from './question.js';
import { getUsersCount } from './control.js';

const addEmptyChars = (str, targetLength=99) => {
  const countLong = targetLength - str.length 
  const completeTo35 = (num) => ' '.repeat(num)

  return str + completeTo35(countLong ) 
}

const updateUsersMap = async (id, line) => {
  const data =readFileSync('./usersMap.json')
  const usersMap = await JSON.parse(data)
  writeFile(
    './usersMap.json',
    JSON.stringify({...usersMap,[id]:line}),
    (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }) 
}
   

const createUser = (user) => {
  appendFile("./users.txt", addEmptyChars(JSON.stringify(user)) + "\n",(err)=>{
    if(err){
        console.log(err)
        exit(1) 
    }
  })
  updateUsersMap(user.id, getUsersCount())
}

console.log(getUsersCount())

    const name = await askForName()
    const gender= await askForGender()
    const kilos = await askForWeight()
    const meter = await askForHeight()

    rl.close();
    
    
    const asignarId =()=> Math.random().toString(36).substr(2, 9);
    
      createUser({
        id: asignarId() ,
        name:name ,
        gender:gender,
         kilos:kilos ,
         meter:meter
        })

      console.log(`thank you ${name}, your data is complete`)

    
   

       
   