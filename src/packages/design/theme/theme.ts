'use client'

import { components, darkPalette, lightPalette, typography } from '@design';
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
  components,
  typography
});