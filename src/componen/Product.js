import items from "../database/product.json";
import {
  Eye,
  ShoppingCart,
  Star
} from "feather-icons-react/build/IconComponents";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";
import FormatPrice from "../utils/formatPrice";
import { useCart } from "react-use-cart";
function Product() {
  const [detail, setDetail] = useState([]);
  const { addItem } = useCart();
  const handleOpen = (products) => {
    setDetail([{ ...products }]);
    const itemDetailModal = document.querySelector("#item-detail-modal");
    itemDetailModal.style.display = "flex";
    console.log("true");
  };

  const handleClose = () => {
    const itemDetailModal = document.querySelector("#item-detail-modal");
    return (itemDetailModal.style.display = "none");
  };

  const addToCart = (item) => {
    addItem(item);
  };

  useEffect(() => {
    const itemDetailModal = document.querySelector("#item-detail-modal");

    window.onclick = (e) => {
      if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
      }
    };
  }, []);
  return (
    <>
      <section id="products" className="products">
        <h2>
          <span>Produk Unggulan</span> Kami
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus!
          Id reprehenderit nam impedit laboriosam beatae fuga.
        </p>
        <div className="row">
          {items.map((item) => {
            return (
              <div className="product-card" key={item.id}>
                <div className="product-icons">
                  <a href="#" onClick={() => addToCart(item)}>
                    <ShoppingCart />
                  </a>
                  <a
                    href="/#products"
                    className="items-detail-button"
                    onClick={() => handleOpen(item)}
                  >
                    <Eye />
                  </a>
                </div>
                <div className="product-image">
                  <img
                    src={require(`../img/products/${item.img}`)}
                    alt="product"
                  />
                </div>
                <div className="product-content">
                  <h3>{item.name}</h3>
                </div>
                <div className="product-stars">
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star />
                </div>

                <div className="product-price">
                  {<FormatPrice price={item.price} />}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Modal
        id="item-detail-modal"
        onClose={() => handleClose()}
        detail={detail}
      />
    </>
  );
}

export default Product;
