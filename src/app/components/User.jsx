"use client"
import { useSession } from 'next-auth/react';
const User = () => {
    const { data: session } = useSession()
    console.log(session, "sessionsessionsessionsession")
    return (
        <div>{session ? session?.user?.name : "to NextAuth Project"}</div>
    )
}

export default User