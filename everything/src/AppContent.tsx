import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Status } from './pages/Status';
import { ProductDetails } from './pages/ProductDetails';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { useSuspiciousActivity } from './utils/security';

export const AppContent = () => {
  const isLoading = useSuspiciousActivity();

  return (
    <>
      <ScrollToTop />
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};