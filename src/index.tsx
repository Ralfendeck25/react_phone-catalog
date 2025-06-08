import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ProductsProvider } from './modules/shared/context/ProductsContext';
import App from './App'; // Changed from named import to default import

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </HashRouter>,
);
