import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from 'src/ui';

import { AuthProvider } from 'src/auth/context-ui';

import { EnhancedApolloProvider } from './utils/apollo';
import { Routes } from './Routes';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EnhancedApolloProvider>
          <ScrollToTop />
          <Routes />
        </EnhancedApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
