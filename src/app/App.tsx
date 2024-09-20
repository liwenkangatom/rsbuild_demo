import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './app.css';
import '@themes/theme.css';
import { router } from './router';
import { store } from './store';
import { ThemeProvider } from '@/shared/themes/theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider value={'dark'}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
