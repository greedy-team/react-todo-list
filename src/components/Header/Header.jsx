import React from 'react';
import { HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <img
        src="/greedyCircleIcon.ico"
        alt="그리디 로고"
        width={65}
        height={65}
      />
    </HeaderContainer>
  );
};

export default Header;
