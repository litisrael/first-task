import { addEmptyChars, addZeros } from './utilytis.js';
import { readFileSync, writeFile, appendFile, statSync } from 'node:fs'
import fs from 'fs'



const USERS_PATH = "./users.txt"
const USER_MAP_PATH = "./usersMap.txt"
const LINE_SIZE = 59

const getUsersFileSize = () => {
  const fileInfo = statSync(USERS_PATH, (error) => {
    if (error) console.error(error);
  })

  return fileInfo.size
}

const getUsersLineCount = () => {
  const size = getUsersFileSize()
  return Math.floor( size / LINE_SIZE)
}

export const getUserMap = async () => {
  const data = readFileSync(USER_MAP_PATH, 'utf8', (err) => {
    if (err) throw err;
  }) || '{}'

  return await JSON.parse(data)
}

export const saveUserMap = (data) => writeFile(
  USER_MAP_PATH,
  JSON.stringify(data),
  (err) => {
    if (err) throw err;
  }
)

const addUserToMap = async (userId, line) => {
  const oldMap = await getUserMap()
  saveUserMap({...oldMap, [userId]: line})
}
function getLineByKey(id) {
  let data = fs.readFileSync('users.txt', 'utf8');
  const start = addZeros(id-1);
  const end = start + 59;   
  const stream = fs.createReadStream('users.txt', { start, end });
  stream.on('data', chunk => {
    console.log(chunk.toString());
  });
}
console.log(getLineByKey(1))

export const saveUser = (user) => {
  const data = addEmptyChars(JSON.stringify(user), LINE_SIZE - 1) + "\n"

  appendFile(USERS_PATH, data, (err) => {
    if (err) {
      console.log(err)
      exit(1)
    } else {
      addUserToMap(user[0], getUsersLineCount())
    }
  })
}
  