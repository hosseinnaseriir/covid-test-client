
import { Box, H1 } from '@design';
import { ReactNode } from 'react';
import { Appbar } from './partials';
import Image from 'next/image';
import sliderBg from '@assets/images/slider-bg.jpg'
const MainLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div>
            <Appbar />
            <Box sx={{
                position: 'relative'
            }}>
                <Box sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <H1 color="white">COVID-19 Test Set Client</H1>
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
            <div>main layout</div>
            {children}
        </div>
    );
};

export default MainLayout;
