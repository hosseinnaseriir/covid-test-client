import { initTranslations } from "@/packages/configs";
import dynamic from "next/dynamic";
const RegisterModule = dynamic(() => import('@/modules/screens/authentication/RegisterModule/RegisterModule'))

export default async function AuthPage({ params: { locale } }: { params: { locale: string } }) {
    const { t } = await initTranslations(locale, ['default']);
    return (
        <>
            <RegisterModule locales={{
                welcome_back: t("welcome_back"),
                fullname: t("fullname"),
                password: t("password"),
                repeat_password: t("repeat_password"),
                register_now: t("register_now"),
                username: t("username"),
                register: t("register"),
                or: t("or"),
                login: t("login")
            }} />
        </>
    );
}
