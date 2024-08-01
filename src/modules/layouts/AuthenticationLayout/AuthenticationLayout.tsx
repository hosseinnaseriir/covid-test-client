
import { Body2, Box, MenuItem, Select } from '@design';
import { GlobalLineSvg } from '@icons/svgs';

import { AuthSlider } from './partials';
import { ReactNode } from 'react';
import { BrandPrimarySvg } from '@/packages/icons/svgs/BrandPrimarySvg';

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

                    <BrandPrimarySvg
                        sx={{
                            fontSize: '4rem'
                        }}
                    />
                    <Select
                        startAdornment={<GlobalLineSvg />}
                        sx={{
                            minWidth: 170,
                        }}
                        defaultValue='English'
                    >
                        <MenuItem
                            sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center',
                            }}
                            value='English'
                        >
                            <Body2>English</Body2>
                        </MenuItem>
                    </Select>
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
                    By clicking Login you agree to our{' '}
                    <Box
                        component='u'
                        sx={{
                            mx: 0.5,
                        }}
                    >
                        {' '}
                        Terms
                    </Box>
                    &{' '}
                    <Box
                        component='u'
                        sx={{
                            mx: 0.5,
                        }}
                    >
                        {' '}
                        Privacy Policy
                    </Box>
                </Body2>
            </Box>
            <AuthSlider />
        </Box>
    );
};

export default AuthenticationLayout;
