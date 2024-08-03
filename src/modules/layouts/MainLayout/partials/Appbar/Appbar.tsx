'use client'
import { BrandPrimarySvg } from "@icons/svgs";
import { useRoutes } from "@routes";
import { Box, Button, Container, H6 } from "@design";
import { useLocales } from "@/packages";
import { LogoutLineSvg } from "@/packages/icons/svgs/LogoutLineSvg";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";

export const Appbar = () => {
    const ROUTES = useRoutes();
    const locales = useLocales();
    const [isToken, setIsToken] = useState(false);

    useEffect(() => {
        const token = !!Cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY!);
        setIsToken(token);
    }, []);

    return (
        <Box
            component="nav"
            sx={{
                bgcolor: 'primary.lighter'
            }}>
            <Container sx={{ p: 2 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <BrandPrimarySvg
                        sx={{
                            fontSize: '4rem'
                        }} />
                    <Box sx={{
                        display: 'flex',
                        gap: 3,
                        minWidth: '30%',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        {
                            isToken ?
                                (
                                    <>
                                        <H6>Hossein Naseri</H6>
                                        <Button><LogoutLineSvg /></Button>
                                    </>
                                ) :
                                (
                                    <>
                                        <Button href={ROUTES.AUTH.REGISTER} fullWidth variant="contained" color="primary">{locales["register"]}</Button>
                                        <Button href={ROUTES.AUTH.LOGIN} fullWidth color="primary">{locales["login"]}</Button>
                                    </>
                                )
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
