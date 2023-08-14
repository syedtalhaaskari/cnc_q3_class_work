import { NextResponse } from "next/server";
import { findOne, whereT } from "../../../../../helpers/dbHelper";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

// export const GET = () => {
//     const email = "talha@gmail.com";
//     const password = "talha123";
//     const user = findOne({ email })
//     if (!user) {
//         return new NextResponse("User is not registered", { status: 400 });
//     }
//     const passordMatch = password === user.password;
//     if (!passordMatch) {
//         return new NextResponse("Password is incorrect", { status: 400 })
//     }

//     const response = NextResponse.json({ message: "Success", user }, { status: 200 })
//     response.cookies.set("token", user.email, { httpOnly: true });
//     return response
// }

export const GET = async () => {
    const email = "askari@gmail.com";
    const userPassword = "askari123";
    let user = findOne({ email })
    if (!user) {
        return new NextResponse("User is not registered", { status: 400 });
    }
    const passordMatch = await bcryptjs.compare(userPassword, user.password);
    if (!passordMatch) {
        return new NextResponse("Password is incorrect", { status: 400 })
    }
    const { password, ...updatedUser } = user;
    const token = jwt.sign(updatedUser, process.env.JWT_TOKEN!, { expiresIn: "6h" })
    const response = NextResponse.json({ message: "Success", user }, { status: 200 })
    response.cookies.set("token", token, { httpOnly: true });
    return response
}