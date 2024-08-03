'use client'
import { BrandPrimarySvg } from "@icons/svgs";
import { useRoutes } from "@routes";
import { Box, Button, Container, H6, Skeleton } from "@design";
import { useLocales } from "@/packages";
import { LogoutLineSvg } from "@/packages/icons/svgs/LogoutLineSvg";
import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from "react";
import { useUser } from "@/packages/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LanguageChanger } from "@/packages/system";

const Appbar = () => {
    const ROUTES = useRoutes();
    const locales = useLocales();
    const [isToken, setIsToken] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const router = useRouter()
    const { data, isLoading } = useUser({
        enabled: isToken
    });

    useEffect(() => {
        const token = !!Cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY!);
        setIsToken(token);
        setIsPageLoaded(true);
    }, []);

    const onLogout = useCallback(() => {
        Cookies.remove(process.env.NEXT_PUBLIC_TOKEN_KEY!);
        router.refresh();
        setIsToken(false);
    }, [router])

    return (
        <Box
            component="nav"
        >
            <Container sx={{ p: 2 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link href={`/`}>
                        <BrandPrimarySvg
                            sx={{
                                fontSize: '4rem'
                            }} />
                    </Link>
                    {!isPageLoaded ? <Skeleton variant="rectangular" height={60} width={300} /> : <Box sx={{
                        display: 'flex',
                        gap: 3,
                        minWidth: '40%',
                        alignItems: 'center',
                        justifyContent: 'flex-end',

                    }}>
                        <LanguageChanger />
                        {
                            isToken ?
                                (
                                    <>
                                        {isLoading ? <Skeleton variant="text" width={140} sx={{ fontSize: '2rem' }} /> : <H6>{data?.user?.fullName}</H6>}
                                        <Button onClick={onLogout}><LogoutLineSvg /></Button>
                                    </>
                                ) : (
                                    <>
                                        <Button href={ROUTES.AUTH.REGISTER} fullWidth variant="contained" color="primary">{locales["register"]}</Button>
                                        <Button href={ROUTES.AUTH.LOGIN} fullWidth color="primary">{locales["login"]}</Button>
                                    </>
                                )
                        }
                    </Box>}
                </Box>
            </Container>
        </Box>
    );
}

export default Appbar;