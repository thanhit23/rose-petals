import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './containers/App';
import LanguageProvider from './containers/LanguageProvider';
import reportWebVitals from './reportWebVitals';
import store from './store';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const showDevtools = () => process.env.NODE_ENV === 'development';

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <LanguageProvider>
        <BrowserRouter>
          {showDevtools() && <ReactQueryDevtools initialIsOpen={false} />}
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
  </QueryClientProvider>,
);

reportWebVitals();
