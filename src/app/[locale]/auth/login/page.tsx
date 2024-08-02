import { initTranslations } from "@/packages/configs";
import dynamic from "next/dynamic";
const LoginModule = dynamic(() => import('@/modules/screens/authentication/LoginModule/LoginModule'))

export default async function AuthPage({ params: { locale } }: { params: { locale: string } }) {
    const { t } = await initTranslations(locale, ['default']);
    return (
        <>
            <LoginModule locales={{
                welcome_back: t("welcome_back"),
                username: t("username"),
                password: t("password"),
                login: t("login"),
                or: t("or"),
                register: t("register")
            }}
            />
        </>
    );
}
