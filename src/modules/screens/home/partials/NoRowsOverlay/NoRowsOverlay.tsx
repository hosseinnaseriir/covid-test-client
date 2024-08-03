'use client';
import { Box, Button, H4, useLocales } from "@/packages";
import { useRoutes } from "@/packages/routes";

export const NoRowsOverlay = () => {
    const locale = useLocales();
    const ROUTES = useRoutes();

    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'cenetr',
            textAlign: 'center',
        }}>
            <H4 fontWeight={300}>{locale["please_login_stats"]}</H4>
            <Box sx={{
                display: 'flex',
                gap: 2,
                py: 3,
                width: '50%',
                minWidth: '22rem',
                margin: '0 auto',
            }}>
                <Button href={ROUTES.AUTH.REGISTER} fullWidth color="primary" variant="outlined">{locale["register"]}</Button>
                <Button href={ROUTES.AUTH.LOGIN} fullWidth color="primary" variant="contained">{locale["login"]}</Button>
            </Box>
        </Box>
    );
}
