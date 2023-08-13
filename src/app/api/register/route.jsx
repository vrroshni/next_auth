import bcrypt from 'bcrypt';
import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';


export async function POST(request) {
    const data = await request.json();
    const { name, email, address, password } = data
    if (!name || !email || !address || !password) {
        return new NextResponse('Missing fields', { status: 400 })
    }
    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    })
    // Check if user already exists in the database
    if(exist){
        throw new Error('Email already exists')
    }

    const hashedPassword=await bcrypt.hash(password,10)
    const user=await prisma.user.create({
        data:{
            name,
            email,
            address,
            hashedPassword
        }
    })
    return NextResponse.json(user)

}