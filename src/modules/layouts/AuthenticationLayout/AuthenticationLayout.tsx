
import { Body2, Box } from '@design';
import { ReactNode } from 'react';
import { BrandPrimarySvg } from '@icons/svgs';
import { LanguageChanger, AuthSlider } from './partials';
import Link from 'next/link';
import { cookies } from 'next/headers';

const AuthenticationLayout = ({ children }: { children: ReactNode }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                maxHeight: '100vh',
            }}
        >
            <Box style={{ flex: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        px: 3,
                        py: 1,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Link href={"/"}>
                        <BrandPrimarySvg
                            sx={{
                                fontSize: '4rem'
                            }}
                        />
                    </Link>
                    <LanguageChanger />
                </Box>
                <Box
                    sx={{
                        height: 'calc(100vh - 120px)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto',
                        pb: 5,
                    }}
                >
                    {children}
                </Box>
                <Body2
                    color='textSecondary'
                    fontWeight={400}
                    sx={{ mx: 'auto', p: 1, pb: 0, textAlign: 'center' }}
                >
                    © Copyright All rights reserved by Hossein Naseri
                </Body2>
            </Box>
            <AuthSlider />
        </Box>
    );
};

export default AuthenticationLayout;
