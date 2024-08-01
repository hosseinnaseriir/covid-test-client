import LoginModule from "@/modules/screens/authentication/LoginModule/LoginModule";
import { initTranslations } from "@/packages/configs";
import { Button } from "@mui/material";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['default']);

  return (
    <>
      <Button>{t("hi")}</Button>
    </>
  );
}
