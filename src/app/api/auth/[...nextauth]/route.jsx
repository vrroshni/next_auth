import NextAuth from 'next-auth/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter  your Email" },
                password: { label: "Password", type: "password", placeholder: "Enter  your password" },
                username: { label: "Username", type: "text", placeholder: "Enter  your username" },
            },
            async authorize(credentials) {
                
                console.log("i am hereeeeeeeeeeeeeee")
                // check to see if email and password is there
                if (!credentials.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                console.log("i am user hereeeeeeeeeeeeeee")
                if (!user || !user?.hashedPassword) {
                    throw new Error("No User Found")
                }
                console.log("i am notuser hereeeeeeeeeeeeeee")
                const passwordMatch = bcrypt.compare(credentials?.password, user?.hashedPassword)
                if (!passwordMatch) {
                    throw new Error("Password does not match")
                }
                console.log("i am passwordMatch")
                console.log(user,"useruseruseruser")

                return user


            }
        })

    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }