'use client';
import { Body2, Box, Button, Divider, H1, InputText, PasswordField } from '@design';
import { useRegisterModule } from './hooks';
import { useRoutes } from '@routes';

const RegisterModule = ({ locales }: { locales: { [key: string]: string; } }) => {
    const { register, onSubmitRegister, isValid, errors, isPending } = useRegisterModule();

    const ROUTES = useRoutes();
    return (
        <Box
            component='form'
            onSubmit={onSubmitRegister}
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                width: 400,
                mx: 'auto',
            }}
        >
            <H1 sx={{ pt: 1, pb: 2, mx: 'auto' }}>{locales["register_now"]}</H1>
            <InputText
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                {...register('username')}
                type='username'
                label={locales["fullname"]}
            />
            <InputText
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                {...register('username')}
                type='username'
                label={locales["username"]}
            />
            <PasswordField
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                validation={register('password')}
                label={locales["password"]}
            />
            <PasswordField
                error={!!errors.repeat_password?.message}
                helperText={errors.repeat_password?.message}
                validation={register('repeat_password')}
                label={locales["repeat_password"]}
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
                    loading={!!isPending}
                    variant='contained'
                    color='primary'
                >
                    {locales["register"]}
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
                <Body2>{locales["or"]}</Body2>
                <Divider sx={{ flex: 1 }} />
            </Box>

            <Button
                color='primary'
                variant='outlined'
                href={ROUTES.AUTH.LOGIN}

            >
                {locales["login"]}
            </Button>
        </Box>
    );
};

export default RegisterModule;
