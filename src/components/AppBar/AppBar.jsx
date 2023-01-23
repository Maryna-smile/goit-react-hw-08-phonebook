import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogIn } from 'redux/selectors';
import UserMenu from '../UserMenu/UserMenu';
import { Header, NavLeft, Navigation, NavRight } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLogIn);

  return (
    <Header>
      <NavLeft>
        <Navigation to="/">Home</Navigation>
        {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
      </NavLeft>
      <NavRight>
        {!isLoggedIn && <Navigation to="register">Register</Navigation>}
        {!isLoggedIn && <Navigation to="login">Login</Navigation>}
        {isLoggedIn && <UserMenu />}
      </NavRight>
    </Header>
  );
}
