import { Button, ButtonProps } from '@mui/material';
import React from 'react';

type Props = {
  func: () => void;
  color?: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  children: React.ReactNode;
  [prop: string]: any; // for the rest property
};

export default function CustomButton({
  func,
  color = 'primary',
  variant = 'contained',
  children,
  ...props
}: Props) {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={func}
      {...props}
      sx={{
        p: 2,
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
}
