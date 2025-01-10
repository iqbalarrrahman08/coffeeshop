import Trash2 from "feather-icons-react/build/IconComponents/Trash2";
import { useCart } from "react-use-cart";
import FormatPrice from "../utils/formatPrice";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const Cart = ({ className }) => {
  const [token, setToken] = useState({});
  const [id, setId] = useState(uuidv4);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // useEffect(() => {
  //   const checkoutButton = document.querySelector(".checkout-button");
  //   const form = document.querySelector("#checkoutForm");
  //   form.addEventListener("keyup", () => {
  //     for (let i = 0; i < form.elements.length; i++) {
  //       if (form.elements[i].value.length !== 0) {
  //         checkoutButton.classList.remove("disabled");
  //         checkoutButton.classList.add("disabled");
  //       } else {
  //         return false;
  //       }
  //     }
  //     checkoutButton.disabled = false;
  //     checkoutButton.classList.remove("disabled");
  //   });
  //   checkoutButton.disabled = true;
  // }, []);
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

  const checkout = async (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    console.log(objData);

    const response = await fetch(
      "http://localhost:4000/api/payment/process-transaction",
      {
        method: "POST",
        body: data
      }
    );

    const requestData = await response.json();
    window.snap.pay(requestData.token);
  };

  return (
    <div className={className}>
      {!isEmpty ? (
        <div>
          {items.map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <img
                  src={require(`../img/products/${item.img}`)}
                  alt="product 1"
                />
                <div className="item-detail">
                  <h3>{item.name}</h3>
                  <div className="item-price">
                    <span>
                      <FormatPrice price={item.price} />
                    </span>
                    &times;
                    <button
                      id="remove"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      &minus;
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      id="add"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    =
                    <span>
                      <FormatPrice price={item.price * item.quantity} />
                    </span>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 />
                </button>
              </div>
            );
          })}
          <h4>Total Harga: {cartTotal}</h4>
          <div className="form-container">
            <form action="" id="checkoutForm" onSubmit={checkout}>
              <input type="hidden" name="order_id" value={id} />
              <input type="hidden" name="items" value={JSON.stringify(items)} />
              <input type="hidden" name="total" value={cartTotal} />
              <h5>Costumer Detail</h5>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <span>Phone</span>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <button
                className="checkout-button"
                id="checkout-button"
                value="checkout"
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      ) : (
        <h4 style={{ marginTop: "1rem" }}>Cart is Empty</h4>
      )}
    </div>
  );
};
export default Cart;
