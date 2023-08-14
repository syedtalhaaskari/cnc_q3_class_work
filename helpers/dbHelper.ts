import path from "path";
import fs from "fs";

const DBpath = path.join(process.cwd(), "/database/db.json");

export const readDB = () => {
    const db = fs.readFileSync(DBpath, "utf8");
    const dbResponse = JSON.parse(db);
    return dbResponse;
}

// console.log(readDB(), " readDB")

type User = {
    readonly _id: string;
    name: string;
    email: string;
    password: string;
}

type db = User[]
type dbResponse = { users: db } | Error

export const writeDB = (updatedUser: User) => {
    const db: dbResponse = readDB();
    if (db instanceof Error) {
        return db;
    }
    const updateUsers: { users: db } = JSON.parse(JSON.stringify(db));
    updateUsers.users.push(updatedUser);
    const doWrite = fs.writeFileSync(DBpath, JSON.stringify(updateUsers, null, 2));
    return updateUsers;
}

export type whereT = {
    _id?: string;
    name?: string;
    email?: string;
}

export const findOne = (where: whereT): User | undefined => {
    const db = readDB();
    return db.users.find((item: User) => item._id === where._id || item.name === where.name || item.email === where.email);
}

// console.log(
//     writeDB({
//         "_id": "830920189091390222",
//         "name": "Test",
//         "email": "test@gmail.com",
//         "password": "test123"
//     })
// );

// console.log(findOne({
//     "_id": "8309s20189091390202",
//     "name": "Taslha",
//     "email": "talsha@gmail.com",
// }), " findOne")

export const UniqueID = () => {
    let characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*()_";

    let uniqueID = "";

    for (let i = 0; i < 15; i++) {
        uniqueID += characters[Math.floor(Math.random() * characters.length)];
    }

    return uniqueID;
}

console.log(UniqueID())