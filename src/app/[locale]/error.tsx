"use client"
import { Box, Button, H3 } from "@/packages";

const ErrorBoundry = () => {

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <H3>
                Error become!
            </H3>
            <Box sx={{
                display: 'flex',
                gap: 2
            }}>
                <Button href="/">Go to HomePage</Button>
                <Button onClick={() => window.location.reload()}>Reload Page</Button>
            </Box>
        </Box>
    );
}

export default ErrorBoundry;