'use client';

import { i18nConfig } from '@configs';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Body2, MenuItem, Select } from '@design';
import { GlobalLineSvg } from '@icons';
import { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const LANGUAGES = [{
    key: 'en',
    value: "en",
    label: "English"
},
{
    key: 'de',
    value: "de",
    label: "Germany"
}]

export const LanguageChanger = () => {
    const currentLocale = i18nConfig.defaultLocale;
    const router = useRouter();
    const currentPathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    const handleChange = useCallback((value: any) => {
        const newLocale = value;
        i18nConfig.defaultLocale = newLocale;
        Cookies.set(process.env.NEXT_PUBLIC_LOCALE_COOKIE!, newLocale)

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
    }, [currentLocale, currentPathname, router]);

    if (!isClient) {
        return null;
    }

    return (
        <Select
            onChange={handleChange} value={currentLocale}
            startAdornment={<GlobalLineSvg />}
            sx={{
                minWidth: 170,
            }}
            defaultValue={LANGUAGES[0].value}
        >
            {
                LANGUAGES.map(lang => (
                    <MenuItem
                        key={lang.key}
                        sx={{
                            display: 'flex',
                            gap: 1,
                            alignItems: 'center',
                        }}
                        value={lang.value}
                    >
                        <Body2>{lang.label}</Body2>
                    </MenuItem>
                ))
            }
        </Select>
    )

}
