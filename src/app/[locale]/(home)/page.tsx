import HomeModule from "@/modules/screens/home/HomeModule";
import { initTranslations } from "@configs";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['default']);
  return (
    <HomeModule />
  );
}
