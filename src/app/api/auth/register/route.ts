import { NextResponse } from "next/server";
import { UniqueID, findOne, writeDB } from "../../../../../helpers/dbHelper";
import bcryptjs from "bcryptjs";

export const GET = async () => {
    let name = "Askari";
    let email = "askari@gmail.com"
    let password = "askari123";
    let salt = await bcryptjs.genSalt(10);
    let passwordHash = await bcryptjs.hash(password, salt);
    let user = findOne({ email });
    if (user) {
        return NextResponse.json("User is already registered", { status: 400 });
    }
    let newUser = {
        _id: UniqueID(),
        name,
        email,
        password: passwordHash
    }
    writeDB(newUser);
    return NextResponse.json({ message: "Success" }, { status: 201 });
}