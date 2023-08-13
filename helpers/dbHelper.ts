import path from "path";
import fs from "fs";

const DBpath = path.join(process.cwd(), "/database/db.json");

const readDB = () => {
    const db = fs.readFileSync(DBpath, "utf8");

    return db;
}

console.log(readDB(), " readDB")