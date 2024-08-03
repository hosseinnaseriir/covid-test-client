'use client'
import { BrandPrimarySvg } from "@icons/svgs";
import { useRoutes } from "@routes";
import { Box, Button, Container } from "@design";
import { useLocales } from "@/packages";

export const Appbar = () => {
    const ROUTES = useRoutes();
    const locales = useLocales();
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
                        alignItems: 'center'
                    }}>
                        <Button href={ROUTES.AUTH.LOGIN} fullWidth variant="contained" color="primary">{locales["register"]}</Button>
                        <Button href={ROUTES.AUTH.REGISTER} fullWidth color="primary">{locales["login"]}</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
