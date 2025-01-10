import { XCircle, Star } from "feather-icons-react/build/IconComponents";
import ShoppingCart from "feather-icons-react/build/IconComponents/ShoppingCart";
import FormatPrice from "../utils/formatPrice";

const Modal = ({ id, onClose, detail }) => {
  return (
    <div className="modal" id={id}>
      {/* <div className="modal-container">
            <a href="#" className="close-icons" onClick={onClose}>
              <XCircle />
            </a>
            <div className="modal-content">
              <img
                src="mama.jpg"
                alt="produk 1"
              />
              <div className="produk-content">
                <h3>product 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing, elit urna
                  feugiat fermentum pellentesque cras quisque, auctor litora
                  integer sociosqu praesent. Cubilia eros massa ad, malesuada
                  nibh.
                </p>
                <div className="product-stars">
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star />
                </div>
                <div className="product-price">
                  {<FormatPrice price="12000" />}
                </div>
                <a href="#">
                  <ShoppingCart /> <span>add to cart</span>
                </a>
              </div>
            </div>
          </div> */}
      {detail.map((product) => {
        return (
          <div className="modal-container" key={product.id}>
            <a href="#" className="close-icon" onClick={onClose}>
              <XCircle />
            </a>
            <div className="modal-content">
              <img
                src={require(`../img/products/${product.img}`)}
                alt="produk 1"
              />
              <div className="produk-content">
                <h3>{product.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing, elit urna
                  feugiat fermentum pellentesque cras quisque, auctor litora
                  integer sociosqu praesent. Cubilia eros massa ad, malesuada
                  nibh.
                </p>
                <div className="product-stars">
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star className="star-full" />
                  <Star />
                </div>
                <div className="product-price">
                  {<FormatPrice price={product.price} />}
                </div>
                <a href="#">
                  <ShoppingCart /> <span>add to cart</span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Modal;
