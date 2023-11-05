import { NextResponse } from "next/server";
// import and inmediately excecute dbconnection (it will only excecute first time)
import { dbConnect } from "@/config/dbConnect";
dbConnect();

export async function GET(request){
    return NextResponse.json({ message: 'NEXT says pong'})
}