import { initReactI18next } from 'react-i18next/initReactI18next';
import { i18nConfig } from '@configs';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export async function initTranslations(
  locale: string = 'default',
  namespaces: Array<string> = ['en']
) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) => {
        return import(`/locales/${language}/${namespace}.json`);
      })
    )
    .init({
      lng: locale,
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      defaultNS: namespaces,
      fallbackNS: namespaces,
      ns: namespaces,
      preload: typeof window === 'undefined' ? i18nConfig.locales : [],
    });

  return i18nInstance;
}
