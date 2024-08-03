'use client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react';

export const useRoutes = () => {
    const pathname = usePathname()
    const lang = pathname.split('/')[1] || 'en';

    const ROUTES = useMemo(() => ({
        ROOT: `/${lang}/`,
        SEARCH: (params: string) => `/${lang}/search/${params}`,
        AUTH: {
            LOGIN: `/${lang}/auth/login`,
            REGISTER: `/${lang}/auth/register`,
        },
    }), [lang]);

    return ROUTES;
};
