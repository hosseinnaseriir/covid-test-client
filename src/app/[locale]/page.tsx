import { initTranslations } from "@/packages/configs";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  console.log({ locale });
  const { t } = await initTranslations(locale, ['default']);

  return (<h1>hello{t("hi")}</h1>);
}
