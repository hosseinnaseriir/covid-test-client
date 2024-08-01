import { FunctionComponent, ReactNode } from 'react';

import { Body2, Box } from '@design';
import { CheckCircleLineSvg, CloseCircleLineSvg } from '@icons/svgs';

type ConditionItemProps = {
  faild: boolean;
  title: ReactNode;
};

export const ConditionItem: FunctionComponent<ConditionItemProps> = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      {!props.faild ? (
        <CloseCircleLineSvg
          sx={{
            path: {
              fill: (theme) => theme.palette.error.main,
            },
          }}
          fontSize='small'
        />
      ) : (
        <CheckCircleLineSvg fontSize='small' />
      )}
      <Body2 fontWeight={400}>{props.title}</Body2>
    </Box>
  );
};
