import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Toolbar } from '@mui/material';

export const MyAppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </header>
  );
};
