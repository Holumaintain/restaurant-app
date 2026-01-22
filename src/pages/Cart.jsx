// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import GeolocationCart from "../components/ui/GeolocationCart";
import { useState, useEffect } from "react";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  // Local cart for quantity handling
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    if (cartItems.length === 0) {
      const dummyItems = [
        {
          id: 1,
          name: "Fresh Orange Klementina",
          img: "/assets/img/shop/grocery/thumbs/01.png",
          href: "/shop-product-grocery",
          price: 3.12,
          quantity: 2,
          discount: 0.33,
        },
        {
          id: 2,
          name: "Red Apple Gala",
          img: "/assets/img/shop/grocery/thumbs/02.png",
          href: "/shop-product-grocery",
          price: 2.5,
          quantity: 1,
        },
        {
          id: 3,
          name: "Steak salmon fillet with rosemary",
          img: "/assets/img/shop/grocery/thumbs/03.png",
          href: "/shop-product-grocery",
          price: 27.0,
          discount: null,
          quantity: 2,
        },
      ];
      setLocalCart(dummyItems);
    } else {
      setLocalCart(cartItems);
    }
  }, [cartItems]);

  const handleIncrement = (index) => {
    const newCart = [...localCart];
    newCart[index].quantity += 1;
    setLocalCart(newCart);
  };

  const handleDecrement = (index) => {
    const newCart = [...localCart];
    if (newCart[index].quantity > 1) newCart[index].quantity -= 1;
    setLocalCart(newCart);
  };

  const handleRemove = (index) => {
    const newCart = localCart.filter((_, i) => i !== index);
    setLocalCart(newCart);
    removeFromCart(localCart[index].id);
  };

  const subtotal = localCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <h2 className="container py-4">Your Cart</h2>
      <GeolocationCart
        cartItems={localCart.map((item, idx) => ({
          ...item,
          onIncrement: () => handleIncrement(idx),
          onDecrement: () => handleDecrement(idx),
          onRemove: () => handleRemove(idx),
        }))}
        subtotal={subtotal.toFixed(2)}
      />
    </>
  );
}
