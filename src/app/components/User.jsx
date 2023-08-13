"use client"
import { useSession } from 'next-auth/react';
const User = () => {
    const { data: session } = useSession()
    return (
        <div>{session?"hello userrrr": "no user"}</div>
    )
}

export default User