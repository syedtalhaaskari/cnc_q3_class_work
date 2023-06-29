import { NextResponse } from "next/server";

let studentNames = ["Salman", "Talha", "Taha"];

export const GET = async () => {
    return NextResponse.json({ students: studentNames })
}

