import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function FloatingCart() {
  const { cartItems } = useCart();

  if (!cartItems.length) return null;

  return (
    <Link
      to="/cart"
      className="position-fixed bottom-0 end-0 m-4 btn btn-warning rounded-pill"
    >
      🛒 Cart ({cartItems.length})
    </Link>
  );
}
   