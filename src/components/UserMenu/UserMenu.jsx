import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="Avatar" width="32" />
      <span>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}