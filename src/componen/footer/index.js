import Facebook from "feather-icons-react/build/IconComponents/Facebook";
import Instagram from "feather-icons-react/build/IconComponents/Instagram";
import Twitter from "feather-icons-react/build/IconComponents/Twitter";
const Index = () => {
  return (
    <div>
      <footer>
        <div className="socials">
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Facebook />
          </a>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Menu">Menu</a>
          <a href="#Contact">Kontak</a>
        </div>
        <div className="credit">
          <p>
            Create by <a href="">Iqbal Arrahman</a>. | &copy; 2023.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
