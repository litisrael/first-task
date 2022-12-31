import { asignarId , addEmptyChars } from './utilytis.js';
import { appendFile, readFile, writeFile,readFileSync } from 'node:fs'
import { rl, askForName,askForGender,askForHeight,askForWeight } from './question.js';
import { lastValueUserMap  } from './control.js';

const usersMap = new Map()
const  addToMap =(id) => {
  usersMap.set(id, lastValueUserMap);
  return { id: id, value: lastValueUserMap };
}

let id = asignarId()
let addToMapActualy = addToMap(id)

const  creatlistMap  =  () => {
   appendFile("./usersMap.txt",addEmptyChars(JSON.stringify(addToMapActualy),34) + "\n" ,(err)=>{
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
  appendFile("./users.txt", addEmptyChars(JSON.stringify(user),99) + "\n",(err)=>{
    if(err){
        console.log(err)
        exit(1) 
    }
  })
  addToMapActualy
  creatlistMap();
   
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

   
   
    
       
   