
import { appendFile, readFile, writeFile,readFileSync } from 'node:fs'
import { rl, askForName,askForGender,askForHeight,askForWeight } from './question.js';
import { lastNumber ,nextNumber } from './control.js';
export const usersMap = new Map()
const asignarId =()=> Math.random().toString(36).substr(2, 9);
    let id = asignarId()
 const  addToMap =(id) => usersMap.set(id,usersMap.size);
 const mapActualy= addToMap()

const addEmptyChars = (str, targetLength=99) => {
  const countLong = targetLength - str.length 
  const completeTo35 = (num) => ' '.repeat(num)
  return str + completeTo35(countLong ) 
}

const  listMap  = async () => {
  await appendFile("./useresMap.txt",JSON.stringify(mapActualy) + "\n" ,(err)=>{
    if(err){
        console.log(err)
        exit(1) 
    }
  })
}




  


// const updateUsersMap = async (id, lastNumber) => {
//   const data = await readFile('./usersMap.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     return data
//   })
//   let usersMap = new Map(JSON.parse(data))
//   usersMap.set(id, nextNumber(lastNumber))
//   writeFile(
//     './usersMap.json',
//     JSON.stringify([...usersMap]),
//     (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     }) 
// }


const createUser = (user) => {
  appendFile("./users.txt", addEmptyChars(JSON.stringify(user)) + "\n",(err)=>{
    if(err){
        console.log(err)
        exit(1) 
    }
  })
   addToMap(user.id);
   listMap();
   
}



    const name = await askForName()
    const gender= await askForGender()
    const kilos = await askForWeight()
    const meter = await askForHeight()

    rl.close();
    
    
    
      createUser({
        id: id ,
        name:name ,
        gender:gender,
         kilos:kilos ,
         meter:meter
        })

      console.log(`thank you ${name}, your data is complete`)

    console.log(...usersMap.entries())
   

       
   