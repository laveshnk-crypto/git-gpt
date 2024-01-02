"use client"
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

// Typescript's excplicit type check for checking props
interface NextAuthProviderProps {
    children: ReactNode;
}

export const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
}