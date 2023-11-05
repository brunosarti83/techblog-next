import { NextResponse } from "next/server";
// import and inmediately excecute dbconnection (it will only excecute first time)
import { dbConnect } from "@/config/dbConnect";
dbConnect()

export async function GET(request){
    return NextResponse.json({ message: 'get all blogs api endpoint'})
}

export async function POST(request){
    const reqBody = await request.json()
    return NextResponse.json({ message: 'add new blog api endpoint', reqBody: reqBody})
}