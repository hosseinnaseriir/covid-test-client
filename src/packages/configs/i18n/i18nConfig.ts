import Coockies from "js-cookie";

export const i18nConfig = {
  locales: ['en', 'de'],
  defaultLocale: Coockies.get(process.env.NEXT_PUBLIC_LOCALE_COOKIE ?? '') ?? 'en',
};
