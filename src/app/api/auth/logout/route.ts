import { NextResponse } from "next/server";

export const GET = (request: NextResponse) => {
    const response = NextResponse.json({ message: "logout" }, { status: 200 });
    response.cookies.set("token", "");
    return response;
    // return NextResponse.json({ message: "logout" }, { status: 200 })

}