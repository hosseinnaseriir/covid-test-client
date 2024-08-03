import MainLayout from "@/modules/layouts/MainLayout/MainLayout";
import { initTranslations } from "@/packages";
import type { Metadata } from "next";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Covid-19 Examinations",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const { t } = await initTranslations(locale, ['default']);

  // const token = cookies().get(process.env.NEXT_PUBLIC_TOKEN_KEY!);
  // if (!token) return redirect(`en/auth/login`)
  return (
    <MainLayout
      locales={{
        all_examinations: t("all_examinations"),
        main_title: t("main_title"),
        login: t("login"),
        register: t("register")
      }}
    >
      {children}
    </MainLayout>
  );
}
