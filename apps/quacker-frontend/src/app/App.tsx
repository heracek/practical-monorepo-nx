import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from '@quacker/ui';

import { AuthProvider } from '@quacker/auth/context-ui';

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
