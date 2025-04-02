import { RouterProvider } from 'react-router-dom';

import { coreRouter } from './routes';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from '../src/context/authContext/index';


import store from './redux/store';
import './i18n';

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { NotificationProvider } from './context/NotificationContext';
import { ToastContainer } from 'react-toastify';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <main data-theme="dark" className='bg-background'>
      <AuthProvider>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          
          {/* <NotificationProvider> */}
            <ToastContainer />
            <CssBaseline />
            <RouterProvider router={coreRouter} />
          
          {/* </NotificationProvider> */}
        </ThemeProvider>
      </Provider>
      </AuthProvider>
    </main>
  );
}

export default App;
