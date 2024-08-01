'use client'
import { Body2, Box, Button, Divider, H1, InputText, PasswordField } from '@design';

import { useLoginModule } from './hooks';

const LoginModule = () => {
    const { register, onSubmitLogin, isValid, errors, isPending } =
        useLoginModule();

    return (
        <Box
            component='form'
            onSubmit={onSubmitLogin}
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                width: 400,
                mx: 'auto',
            }}
        >
            <H1 sx={{ pt: 1, pb: 2, mx: 'auto' }}>Welcome Back!</H1>
            <InputText
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                {...register('username')}
                type='username'
                label='Username or Phone Number'
            />
            <PasswordField
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                validation={register('password')}
                label='Password'
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                <Button
                    disabled={isValid}
                    type='submit'
                    loading={isPending}
                    variant='contained'
                    color='primary'
                >
                    Login
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'center',
                }}
            >
                <Divider sx={{ flex: 1 }} />
                <Body2>Or</Body2>
                <Divider sx={{ flex: 1 }} />
            </Box>

            <Button
                color='primary'
                variant='outlined'
            >
                Register
            </Button>
        </Box>
    );
};

export default LoginModule;
