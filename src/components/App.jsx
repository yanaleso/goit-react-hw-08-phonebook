import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { authOperations } from '../redux/auth';
import { useAuth } from 'hooks';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PublicRoute component={<Home />} />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<Login />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};