"use client"
import { SessionProvider } from 'next-auth/react';
import{ Toaster }from 'react-hot-toast';

function Provider({ children }) {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
            <Toaster />
        </>
    )
}

export default Provider