import {
  autocompleteClasses,
  AutocompleteProps,
  Components,
} from '@mui/material';

import { StylePropsType } from '@design';

export const MuiAutocomplete: Components['MuiAutocomplete'] = {
  styleOverrides: {
    root: ({
      theme,
    }: StylePropsType<
      AutocompleteProps<unknown, boolean, boolean, boolean>
    >) => ({
      '& .MuiInputBase-root': {
        paddingInline: theme.spacing(1),
      },
      [`& .${autocompleteClasses.endAdornment} `]: {
        right: '16px!important',
        '& button': {
          width: 0,
          svg: {
            fontSize: 20,
          },
          height: 0,
          border: 'none',
          [`&.${autocompleteClasses.popupIndicatorOpen}`]: {
            position: 'relative',
            top: '2px',
            left: '0px',
          },
        },
      },
    }),
    tag: ({
      theme,
    }: StylePropsType<
      AutocompleteProps<unknown, boolean, boolean, boolean>
    >) => ({
      margin: 0,
      marginInline: theme.spacing(0.5),
      svg: {
        margin: 0 + '!important',
      },
    }),
    inputRoot: ({
      theme,
    }: StylePropsType<
      AutocompleteProps<unknown, boolean, boolean, boolean>
    >) => ({
      paddingBlock: theme.spacing(0.3),
      paddingInline: theme.spacing(1.5),
    }),
  },
};
