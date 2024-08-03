import { Box, H1 } from '@design';
import { ReactNode } from 'react';
import { Appbar, MainSearch } from './partials';
import Image from 'next/image';
import sliderBg from '@assets/images/slider-bg.jpg'
import { LocalesType } from '@/packages/types';

const MainLayout = ({ children, locales }: { children: ReactNode, locales: LocalesType['locales'] }) => {

    return (
        <div>
            <header>
                <Appbar />
                <Box sx={{
                    position: 'relative'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%'
                    }}>
                        <H1 color="white">{locales['main_title']}</H1>
                        <MainSearch />
                    </Box>
                    <Image
                        alt='main covid test image'
                        src={sliderBg}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
            </header>
            {children}
        </div>
    );
};

export default MainLayout;
