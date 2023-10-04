import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from 'src/containers/App';
import LanguageProvider from 'src/containers/LanguageProvider';
import reportWebVitals from 'src/reportWebVitals';
import store from 'src/store';
import ThemeProvider from 'src/theme';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <LanguageProvider>
        <ThemeProvider>
          <React.Fragment>
            {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
            <App />
          </React.Fragment>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  </QueryClientProvider>,
);

reportWebVitals();
