import { NextResponse } from "next/server";
// import and inmediately excecute dbconnection (it will only excecute first time)
import { dbConnect } from "@/config/dbConnect";
dbConnect();

export async function GET(request, { params }){
    const { blogid } = params
    return NextResponse.json({ message: 'get all blogs api endpoint', blogid: blogid})
}

export async function PUT(request, { params }){
    const { blogid } = params
    return NextResponse.json({ message: 'edit blog api endpoint', blogid: blogid})
}

export async function DELETE(request, { params }){
    const { blogid } = params
    return NextResponse.json({ message: 'delete blog api endpoint', blogid: blogid})
}