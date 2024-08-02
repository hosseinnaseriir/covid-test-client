
import { Box, Button, H1 } from '@design';
import { ReactNode } from 'react';
import { Appbar } from './partials';
import Image from 'next/image';
import sliderBg from '@assets/images/slider-bg.jpg'
import { AutoComplete } from '@design';
import { SearchLineSvg } from '@icons/svgs';


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
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%'
                }}>
                    <H1 color="white">COVID-19 Test Set Client</H1>
                    <Box sx={{
                        width: "32rem",
                        display: 'flex',
                        gap: 1,
                        '& .MuiInputBase-root': {
                            bgcolor: "common.white"
                        }
                    }}>
                        <AutoComplete
                            fullWidth
                            InputProps={{
                                placeholder: "Search With Location ID",
                            }}
                            options={[]} />
                        <Button variant='contained' color='primary'>
                            <SearchLineSvg fontSize='small' />
                        </Button>
                    </Box>
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
            {children}
        </div>
    );
};

export default MainLayout;
