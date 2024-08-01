import AuthenticationLayout from "@/modules/layouts/AuthenticationLayout/AuthenticationLayout";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
    title: "Login to Covid-test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthenticationLayout>
            {children}
        </AuthenticationLayout>
    );
}
