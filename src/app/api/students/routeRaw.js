import { NextResponse } from "next/server";
import data from "./data.json"

export const GET = async () => {
    console.log({ data });
    return NextResponse.json({ students: data })
}

export const POST = async (req) => {
    try {

        const reqBody = await req.json();

        if (!reqBody.name) {
            throw new Error("Name is mandatory");
        }
        if (!reqBody.email) {
            throw new Error("Email is mandatory");
        }
        console.log({ reqBody });

        data.data.push({
            id: data.length + 1,
            name: reqBody.name,
            email: reqBody.email,
            isStudent: true
        });

        return NextResponse.json({ students: data })
    } catch (err) {
        console.log("Error ===> ", err)
        return NextResponse.json({ message: err.message }, {
            status: 400
        })
    }
}

export const PUT = async (req) => {
    const id = request.nextUrl.searchParams.get("id");

    try {

        const reqBody = await req.json();

        if (!reqBody.name) {
            throw new Error("Name is mandatory");
        }
        console.log({ reqBody });

        const ind = data.data.findIndex(item => item.id === +id);
        data.data[ind] = {
            id: id,
            name: reqBody.name,
            email: reqBody.email,
            isStudent: reqBody.isStudent,
        }

        return NextResponse.json({ students: data })
    } catch (err) {
        console.log("Error ===> ", err)
        return NextResponse.json({ message: err.message }, {
            status: 400
        })
    }
}

export const PATCH = async (req) => {
    const id = req.nextUrl.searchParams.get("id");

    try {
        console.log("ID", id);

        const reqBody = await req.json();

        console.log({ reqBody });

        const ind = data.data.findIndex(item => item.id === +id);
        console.log({ ind });
        data.data[ind] = {
            ...data.data[ind],
            ...reqBody,
        }

        console.log("DDDD ", data)

        return NextResponse.json({ students: data })
    } catch (err) {
        console.log("Error ===> ", err)
        return NextResponse.json({ message: err.message }, {
            status: 400
        })
    }
}

export const DELETE = async (req) => {
    const id = req.nextUrl.searchParams.get("id");

    try {

        if (id >= data.length) {
            throw new Error("Details Not Available is mandatory");
        }
        const ind = data.data.findIndex(item => item.id === +id);
        data.data.splice(ind, 1);

        return NextResponse.json({ students: data })
    } catch (err) {
        console.log("Error ===> ", err)
        return NextResponse.json({ message: err.message }, {
            status: 404
        })
    }
}