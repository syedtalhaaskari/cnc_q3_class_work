import { NextResponse } from "next/server"
import { readDB } from "../../../helpers/dbHelper";

export const GET = () => {
    readDB();
    return new NextResponse("");
}