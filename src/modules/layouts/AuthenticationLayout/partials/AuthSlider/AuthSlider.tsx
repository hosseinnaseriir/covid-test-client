
import { Box } from '@design';
import Image from 'next/image';
import test from '@assets/images/civid-test-login.jpg'
export const AuthSlider = () => {

  return (
    <Box sx={{
      flex: 1,
      overflow: 'hidden',
      height: '100vh'
    }}>
      <Image
        alt='covid-test login'
        style={{
          objectFit: 'cover'
        }}
        src={test}
      />
    </Box>
  )
};
