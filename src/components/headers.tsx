import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

