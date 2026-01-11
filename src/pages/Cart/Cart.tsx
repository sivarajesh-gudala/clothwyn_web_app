import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../store/cartSlice";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding: 24 }}>
      <h2>Your Cart</h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((p) => (
        <div key={p.id} style={{ marginBottom: 16 }}>
          <strong>{p.title}</strong> - ₹{p.price} × {p.quantity}
          <div>
            <button onClick={() => dispatch(decreaseQty(p.id))}>-</button>
            <button onClick={() => dispatch(increaseQty(p.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(p.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && <h3>Total: ₹{total}</h3>}
    </div>
  );
};

export default Cart;
