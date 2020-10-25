import styled from 'styled-components';

import colors from '../consts/colors';

const Header = styled.header`
  background: ${colors.daintree};
  padding: 2em;
  
  h1 {
    color: ${colors.white};
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
  }
`;

export default Header;
