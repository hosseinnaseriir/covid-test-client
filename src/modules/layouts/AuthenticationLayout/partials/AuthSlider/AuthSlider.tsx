
'use client'
import { Box } from '@design';
import Image from 'next/image';
import covidTestLoginImage from '@assets/images/civid-test-login.jpg'
import covidTestRegisterImage from '@assets/images/civid-test-register.jpg'
import { useRoutes } from '@routes';
import { usePathname } from 'next/navigation';

export const AuthSlider = () => {
  const pathname = usePathname()
  const ROUTES = useRoutes()
  return (
    <Box sx={{
      flex: 1,
      overflow: 'hidden',
      height: '100vh'
    }}>
      <Image
        alt='covid-test app'
        style={{
          objectFit: 'cover',
          height: '100%',
          width: '100%'
        }}
        src={pathname === ROUTES.AUTH.LOGIN ? covidTestLoginImage : covidTestRegisterImage}
      />
    </Box>
  )
};
