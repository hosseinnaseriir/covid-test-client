import { theme } from "@/packages/design";
import { Experimental_CssVarsProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';
import { initTranslations } from "@/packages";
import ReactQueryProvider from "@/packages/system/components/providers/ReactQueryProvider/ReactQueryProvider";
import MainContextProvider from "@/packages/contexts/MainContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid Test",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const { t } = await initTranslations(params.locale, ['default']);

  return (
    <html lang={params.locale ?? "en"}>
      <link rel="icon" href="/covid-test.svg" sizes="any" />
      <body className={`${inter.className}`}>
        <AppRouterCacheProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Experimental_CssVarsProvider theme={theme}>
            <ReactQueryProvider>
              <MainContextProvider locales={{
                register: t("register"),
                login: t("login"),
                search_with_location: t("search_with_location"),
                please_login_stats: t("please_login_stats")
              }}>
                {children}
              </MainContextProvider>
            </ReactQueryProvider>
          </Experimental_CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
