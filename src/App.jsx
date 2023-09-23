import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./reset.css";
import "./App.css";
import "./style/Header.css";
import "./style/Content.css";
import "./style/Footer.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Header/>
        <Content/>
      </div>
      <Footer />
    </>
  );
}

export default App;
