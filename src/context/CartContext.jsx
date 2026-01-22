import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh orange Klementina, Spain',
      img: '/assets/img/shop/grocery/thumbs/01.png',
      href: '/shop-product-grocery',
      price: 3.12,
      quantity: 3,
      discount: 2.79,
    },
    {
      id: 2,
      name: 'Pesto sauce Barilla with basil, Italy',
      img: '/assets/img/shop/grocery/thumbs/02.png',
      href: '/shop-product-grocery',
      price: 3.95,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Steak salmon fillet with rosemary',
      img: '/assets/img/shop/grocery/thumbs/03.png',
      href: '/shop-product-grocery',
      price: 27.0,
      quantity: 2,
    },
    {
      id: 4,
      name: 'Sprite soda lemon lime, can',
      img: '/assets/img/shop/grocery/thumbs/04.png',
      href: '/shop-product-grocery',
      price: 0.8,
      quantity: 2,
    },
  ]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const updateQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
