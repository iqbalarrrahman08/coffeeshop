import "./css/style.css";
import Navbar from "./componen/navbar/index";
import Header from "./componen/header/index";
import Content from "./componen/content/index";
import Footer from "./componen/footer/index";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = "SB-Mid-client-b7mtZ-lwFI-W1kZS";

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
