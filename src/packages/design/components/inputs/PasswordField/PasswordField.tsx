'use client';
import { FunctionComponent, useState } from 'react';

import { Body2, Box, Button, InputText, Tooltip } from '@design';
import { EyeLineSvg, EyeOffLineSvg } from '@icons/svgs';

import { ConditionItem } from './partials';
import { PasswordFieldProps } from './PasswordField.types';

export const PasswordField: FunctionComponent<PasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConditions, setPasswordConditions] = useState({
    fucused: false,
    length: false,
    upperLetter: false,
    lowerLetter: false,
    numberLetter: false,
    specialLetter: false,
  });

  function checkPassword(password: string) {
    setPasswordConditions((prev) => ({
      fucused: prev.fucused,
      length: password.length > 8,
      upperLetter: /[A-Z]/.test(password),
      lowerLetter: /[a-z]/.test(password),
      numberLetter: /[0-9]/.test(password),
      specialLetter: /[!@#$%^&*()\-=_+[\]{};':"|,.<>/?]/.test(password),
    }));
  }

  const passwordError =
    !passwordConditions.length ||
    !passwordConditions.specialLetter ||
    !passwordConditions.numberLetter ||
    !passwordConditions.lowerLetter ||
    !passwordConditions.upperLetter;

  return (
    <>
      <InputText
        {...props}
        {...props.validation}
        onChangeCapture={(_event) => {
          checkPassword((_event.target as HTMLInputElement).value);
        }}
        onFocus={() => {
          setPasswordConditions((prev) => ({ ...prev, fucused: true }));
        }}
        onBlur={() => {
          setPasswordConditions((prev) => ({ ...prev, fucused: false }));
        }}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          sx: {
            pr: 0,
          },
          endAdornment: (
            <Tooltip
              slotProps={{
                arrow: {
                  sx: {
                    color: (theme) => theme.palette.common.white,
                  },
                },
                tooltip: {
                  sx: {
                    backgroundColor: (theme) => theme.palette.common.white,
                    color: (theme) => theme.palette.grey[800],
                    boxShadow: (theme) => theme.shadows[5],
                  },
                },
              }}
              arrow
              title={
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Body2>Password should contain at least:</Body2>
                  <ConditionItem
                    title='8 characters'
                    faild={passwordConditions.length}
                  />
                  <ConditionItem
                    title='One uppercase'
                    faild={passwordConditions.upperLetter}
                  />
                  <ConditionItem
                    title='One lowercase'
                    faild={passwordConditions.lowerLetter}
                  />
                  <ConditionItem
                    title='One number'
                    faild={passwordConditions.numberLetter}
                  />
                  <ConditionItem
                    title='One special case character'
                    faild={passwordConditions.specialLetter}
                  />
                </Box>
              }
              open={passwordConditions.fucused && passwordError}
              placement='right'
            >
              <Button onClick={() => setShowPassword((prev) => !prev)}>
                {!showPassword ? <EyeLineSvg /> : <EyeOffLineSvg />}
              </Button>
            </Tooltip>
          ),
        }}
      />
    </>
  );
};
