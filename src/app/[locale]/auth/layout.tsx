import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthenticationLayout = dynamic(() => import('@/modules/layouts/AuthenticationLayout/AuthenticationLayout'))

export const metadata: Metadata = {
    title: "Login to Covid-test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const token = cookies().get(process.env.NEXT_PUBLIC_TOKEN_KEY!);
    if (token) return redirect(`/en`);

    return (
        <AuthenticationLayout>
            {children}
        </AuthenticationLayout>
    );
}
