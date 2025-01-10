/* eslint-disable jsx-a11y/iframe-has-title */
import img from "../../img/tentangKami.jpg";
import menu1 from "../../img/menu/1.jpg";
import { Mail, Phone, User } from "feather-icons-react/build/IconComponents";
import Product from "../Product";
const Index = ({ data }) => {
  return (
    <div>
      <section id="about" className="about">
        <h2>
          <span>Tentang</span> Kami
        </h2>

        <div className="row">
          <div className="about-img">
            <img src={img} alt="Tentang Kami" />
          </div>
          <div className="content">
            <h3>Kenapa memilih kopi kami</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              saepe molestias nostrum. Ad, quaerat velit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              natus! Id reprehenderit nam impedit laboriosam beatae fuga debitis
              ratione quae!
            </p>
          </div>
        </div>
      </section>

      {/* menu section */}
      <section id="menu" className="menu">
        <h2>
          <span>Menu</span> Kami
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus!
          Id reprehenderit nam impedit laboriosam beatae fuga.
        </p>
        <div className="row">
          <div className="menu-card">
            <img src={menu1} alt="espresso" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={menu1} alt="espresso" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={menu1} alt="espresso" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
          <div className="menu-card">
            <img src={menu1} alt="espresso" />
            <h3 className="menu-card-title">- Espresso -</h3>
            <p className="menu-card-price">IDR 15K</p>
          </div>
        </div>
      </section>
      {/* menu section */}

      {/* Products section start */}
      <Product  />
      {/* Products section end */}

      {/* contact section start */}
      <section id="contact" className="contact">
        <h2>
          <span>Kontak</span> Kami
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, natus!
          Id reprehenderit nam impedit laboriosam beatae fuga.
        </p>

        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.339923065484!2d106.79399491426202!3d-6.604613266398919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b6757d7817%3A0x82ab1619188f430e!2sMall%20BTM%20Bogor!5e0!3m2!1sid!2sid!4v1674475364002!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>

          <form action="">
            <div className="input-group">
              <User />
              <input type="text" placeholder="nama" />
            </div>
            <div className="input-group">
              <Mail />
              <input type="text" placeholder="email" />
            </div>
            <div className="input-group">
              <Phone />
              <input type="text" placeholder="no hp" />
            </div>

            <button className="btn">kirim pesan</button>
          </form>
        </div>
      </section>
      {/* contact section end*/}
    </div>
  );
};
export default Index;
