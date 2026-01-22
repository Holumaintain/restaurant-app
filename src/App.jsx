// src/App.jsx
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import AppHeader from './components/layout/AppHeader';
import Footer from './components/layout/Footer';
import FloatingCart from './components/layout/FloatingCart';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import VerifyOTP from './pages/VerifyOTP';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Categories from './pages/Categories'; // new page
import Offers from './pages/Offers';         // new page
import Events from './pages/Events';         // new page
import About from './pages/About';           // new page
import Contact from './pages/Contact';       // new page

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <CartProvider>
          <Helmet>
            <title>Fresh Fork | Restaurant Ordering</title>
          </Helmet>

          <Router>
            {/* Header */}
            <AppHeader />

            <main style={{ minHeight: '80vh' }}>
              <Routes>
                {/* Core pages */}
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verify-email" element={<VerifyOTP />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
                <Route path="/dashboard/*" element={<UserDashboard />} />

                {/* Fallback */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            {/* Footer and Floating Cart */}
            <Footer />
            <FloatingCart />
          </Router>
        </CartProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
