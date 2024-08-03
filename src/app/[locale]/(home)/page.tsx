import { initTranslations } from "@configs";
import dynamic from "next/dynamic";

const HomeModule = dynamic(() => import('@/modules/screens/home/HomeModule'))

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['default']);
  return (
    <HomeModule locales={{
      all_examinations: t("all_examinations"),
      examination_summary: t("examination_summary"),
    }} />
  );
}
