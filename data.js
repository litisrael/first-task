import { addEmptyChars, addZeros } from './utilytis.js';
import { readFileSync, writeFile, appendFile, statSync } from 'node:fs'

const USERS_PATH = "./users.txt"
const USER_MAP_PATH = "./usersMap.txt"
const LINE_SIZE = 60

const getUsersFileSize = () => {
  const fileInfo = statSync(USERS_PATH, (error) => {
    if (error) console.error(error);
  })

  return fileInfo.size
}

const getUsersLineCount = () => {
  const size = getUsersFileSize()
  return size / LINE_SIZE
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

function getUserById(id) {
  const statUsers = fs.statSync(USERS_PATH);
  const start = addZeros(id-1);
  const end = start + 99;   
  const stream = fs.createReadStream(USERS_PATH, { start, end });
  stream.on('data', chunk => {
    console.log(chunk.toString());
  });
}

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
  