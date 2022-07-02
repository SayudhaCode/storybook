import styled, { css } from 'styled-components';
import { DividerProps } from './Divider';

export const StyledDiv = styled.div<DividerProps>`
  display: block;
  border-bottom: ${(p) => {
    if (p.styled === 'solid') {
      return '1px solid black';
    } else if (p.styled === 'dashed') {
      return '1px dashed';
    }
    return '1px dotted';
  }};
  width: 100vw;
  text-align: ${(p) => {
    if (p.alignment === 'start') {
      return 'left';
    } else if (p.alignment === 'center') {
      return 'center';
    }
    return 'right';
  }};
  height: 10px;
  margin-bottom: 10px;
  font-weight: ${(p) => {
    if (p.weight === 'light') {
      return '100';
    } else if (p.weight === 'regular') {
      return '300';
    }
    return '600';
  }};
`;