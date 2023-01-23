import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/RegisterPage';
import Layout from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from './components/PublicRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
