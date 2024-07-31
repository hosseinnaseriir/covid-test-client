'use client';

import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '@configs';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push(
        `/${newLocale}/${currentPathname.split('/').slice(2).join('/')}`
      );
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value='en'>English</option>
      <option value='ar'>Arabic</option>
      <option value='el'>greek</option>
    </select>
  );
}
