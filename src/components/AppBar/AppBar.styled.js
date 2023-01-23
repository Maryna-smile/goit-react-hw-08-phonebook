import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Navigation = styled(NavLink)`
 font-size: 20px;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;




export const Text = styled.p`
  font-size: 20px;
`;