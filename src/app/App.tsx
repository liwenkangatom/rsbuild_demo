import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './app.css';
import { ThemeProvider } from '@/shared/themes/theme';
import { router } from './router';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};
