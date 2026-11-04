import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import BioLink from './pages/BioLink.tsx';
import NotFound from './pages/NotFound.tsx';
import ScrollRestoration from './components/ScrollRestoration.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/links" element={<BioLink />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
