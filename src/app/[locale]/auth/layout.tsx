import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AuthenticationLayout = dynamic(() => import('@/modules/layouts/AuthenticationLayout/AuthenticationLayout'))


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
