import type { ThemeOptions } from '@mui/material';

declare module '@mui/material' {
  interface CustomPalette {
    line: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }

  export type Palette = CustomPalette;

  export type PaletteOptions = CustomPalette;

  export interface PaletteColor {
    lighter: string;
    darker: string;
    overlay: string;
  }

  export interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
    overlay: string;
  }

  export interface TypeText {
    tertiary: string;
  }
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    line: {
      light: string;
      main: string;
      dark: string;
      secondary: string;
      tertiary: string;
      primary: string;
    };
  }
}

export type PaletteType = ThemeOptions['palette'] & {
  line: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

export type PaletteMode = 'light' | 'dark';
