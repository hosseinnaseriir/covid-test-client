'use client'

import { components, darkPalette, lightPalette, typography } from '@design/theme';
import { experimental_extendTheme } from "@mui/material";


export const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: lightPalette ?? {}
    },
    dark: {
      palette: darkPalette ?? {}
    }
  },
  components: components ?? {},
  typography
});