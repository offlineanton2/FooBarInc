import styled from 'styled-components';

import colors from '../consts/colors';

const Button = styled.button`
  background: ${colors.blueChill};
  border: none;
  border-radius: 5px;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  outline: none;
  padding: 7px;
  text-decoration: none;
  
  &:disabled {
    background: ${colors.halfBaked};
    cursor: auto;
  }
`;

export default Button;
