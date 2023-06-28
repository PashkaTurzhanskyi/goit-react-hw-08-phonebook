import { Suspense } from 'react';
import { MyAppBar } from './MyAppBar';
import { Outlet } from 'react-router-dom';
import { AppBar, Box } from '@mui/material';

export const Layout = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <MyAppBar />
        </AppBar>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
