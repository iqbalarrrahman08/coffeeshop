import logo from "./logo.svg";
import "./css/style.css";
import Navbar from "./componen/navbar/index";
import Header from "./componen/header/index";
import Content from "./componen/content/index";
import Footer from "./componen/footer/index";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
