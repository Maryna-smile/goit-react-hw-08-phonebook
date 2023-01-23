import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogIn } from 'redux/selectors';
import UserMenu from '../UserMenu/UserMenu';
import { Header, NavLeft, Navigation } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLogIn);

  return (
    <Header>
      <NavLeft>
        <Navigation to="/">Home</Navigation>
        {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
      </NavLeft>
      <div>
        {!isLoggedIn && <Navigation to="register">Register</Navigation>}
        {!isLoggedIn && <Navigation to="login">Login</Navigation>}
        {isLoggedIn && <UserMenu />}
      </div>
    </Header>
  );
}
