import React from 'react';
import { HeaderContainer, Title } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <img
        src="/greedyCircleIcon.ico"
        alt="그리디 로고"
        width={50}
        height={50}
      />
      <Title>일정 관리</Title>
    </HeaderContainer>
  );
};

export default Header;
