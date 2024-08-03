'use client';
import { Body2, Box, Button, Divider, H1, InputText, PasswordField } from '@design';
import { useLoginModule } from './hooks';
import { useRoutes } from '@routes';
import { LocalesType } from '@/packages/types';

const LoginModule = ({ locales }: LocalesType) => {
    const { register, onSubmitLogin, isValid, errors, isPending } = useLoginModule();
    const ROUTES = useRoutes();

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
            <H1 sx={{ pt: 1, pb: 2, mx: 'auto' }}>{locales["welcome_back"]}</H1>
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
                    {locales["login"]}
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
                href={ROUTES.AUTH.REGISTER}
                color='primary'
                variant='outlined'
            >
                {locales["register"]}
            </Button>
        </Box>
    );
};

export default LoginModule;
