import React from 'react';
// @ts-ignore
import { StyledButton } from './styles.ts';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ComponentPropsWithoutRef<'button'>
  >(({ children, variant, size, isFullWidth, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      type="button"
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  isFullWidth: false
};