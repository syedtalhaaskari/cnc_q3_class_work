import { NextResponse } from "next/server";
import fs from "fs"
import path from "path"

const dbFile = path.join(process.cwd(), 'db.json');
// process.cwd(); Current Working Directory It shows the absolute path of file

const getData = () => {
    const data = fs.readFileSync(dbFile);
    return JSON.parse(data);
}

const updateData = (params) => {
    fs.writeFileSync(dbFile, JSON.stringify(params, null, 4));
    return params;
}

console.log(getData(), "Data");

export const GET = async () => {
    return NextResponse.json({ students: getData() })
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
        const data = getData();

        data.data.push({
            id: data.data.length + 1,
            name: reqBody.name,
            email: reqBody.email,
            isStudent: true
        });

        updateData(data);
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

        const data = getData();

        const ind = data.data.findIndex(item => item.id === +id);
        data.data[ind] = {
            id: id,
            name: reqBody.name,
            email: reqBody.email,
            isStudent: reqBody.isStudent,
        }
        updateData(data);

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
        const reqBody = await req.json();

        const data = getData();

        const ind = data.data.findIndex(item => item.id === +id);
        data.data[ind] = {
            ...data.data[ind],
            ...reqBody,
        }

        updateData(data);

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
        const data = getData();

        if (id >= data.data.length) {
            throw new Error("Details Not Available is mandatory");
        }

        const ind = data.data.findIndex(item => item.id === +id);
        data.data.splice(ind, 1);

        updateData(data);

        return NextResponse.json({ students: data })
    } catch (err) {
        console.log("Error ===> ", err)
        return NextResponse.json({ message: err.message }, {
            status: 404
        })
    }
}