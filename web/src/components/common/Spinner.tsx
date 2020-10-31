import styled, { keyframes } from 'styled-components';
import { MyThemeProps } from '../themes/MyThemeProps';

const rotation = keyframes`
from{
transform: rotate(0deg);
}
to{
transform: rotate(360deg);
}

`;

interface SpinnerProps<T> {
  theme?: T;
}

const Spinner = styled.div<SpinnerProps<MyThemeProps>>`
  height: 30px;
  width: 30px;
  border: 1px solid ${p => p.theme.primaryColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
