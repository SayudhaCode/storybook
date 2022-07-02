import React from 'react';
import {StyledDiv} from './styles';


export interface DividerProps extends React.ComponentPropsWithoutRef<'div'>{
  alignment?: 'start' | 'center' | 'end';
  styled?: 'solid' | 'dashed' | 'dotted';
  weight?: 'light' | 'regular' | 'heavy';
}


export const Divider = React.forwardRef<
  HTMLDivElement,
  DividerProps & React.ComponentPropsWithoutRef<'div'>
  >(({ children, alignment, styled, weight, ...props }, ref) => {
  return (
    <StyledDiv
      ref={ref}
      alignment={alignment}
      styled={styled}
      weight={weight}
      {...props}
    >
      <span>
        {children}
      </span>
    </StyledDiv>
  );
});

Divider.defaultProps = {
  alignment: 'center',
  styled: 'solid',
  weight: 'regular'
};