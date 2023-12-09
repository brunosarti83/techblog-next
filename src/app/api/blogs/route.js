import { NextResponse } from "next/server";
// import and inmediately excecute dbconnection (it will only excecute first time)
import { dbConnect } from "@/config/dbConnect";
import Blog from "@/models/blogModel";
dbConnect()

export async function GET(request){
    return NextResponse.json({ message: 'get all blogs api endpoint'})
}

export async function POST(request){
    try {
        const reqBody = await request.json()
        await Blog.create(reqBody)
        return NextResponse.json({
            message: 'Blog added succesfully'
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, 
        { status: 500 }
        )
    }
}