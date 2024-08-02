import { initTranslations } from "@/packages/configs";
import { Button } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['default']);
  // const token = cookies().get(process.env.NEXT_PUBLIC_TOKEN_KEY!);
  // if (!token) return redirect(`en/auth/login`)
  return (
    <h1>hello</h1>
  );
}
