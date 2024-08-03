import { Box, Button, H4 } from "@/packages";

export const NoRowsOverlay = () => {
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'cenetr',
            textAlign: 'center',
        }}>
            <H4 fontWeight={300}>Please login or register to view the examination stats.</H4>
            <Box sx={{
                display: 'flex',
                gap: 2,
                py: 3,
                width: '50%',
                minWidth: '22rem',
                margin: '0 auto',
            }}>
                <Button fullWidth color="primary" variant="outlined">Register</Button>
                <Button fullWidth color="primary" variant="contained">Login</Button>
            </Box>
        </Box>
    );
}
