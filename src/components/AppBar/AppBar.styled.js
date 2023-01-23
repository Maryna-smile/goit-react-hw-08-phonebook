import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
 display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
   max-width: 800px;
`;

// export const Container = styled.div`
//    display: flex;
//   align-items: center;
//   justify-content: space-between;
 
//   margin: 0 auto;
// `;

export const Navigation = styled(NavLink)`
margin-right: 10px;
 font-size: 20px;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;


`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


export const Text = styled.p`
  font-size: 20px;
`;