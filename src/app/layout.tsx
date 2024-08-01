import { theme } from "@/packages/design";
import { Experimental_CssVarsProvider, experimental_extendTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="-dark-theme">
      <link rel="icon" href="/covid-test.svg" sizes="any" />
      <body className={`${inter.className}`}>
        <AppRouterCacheProvider

        >
          <Experimental_CssVarsProvider theme={theme}>
            {children}
          </Experimental_CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
