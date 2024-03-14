import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Offers from "./components/Offers/Offers";
import Specialists from "./components/Specialists/Specialists";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Specialists></Specialists>
      <Offers></Offers>
      <Footer></Footer>
    </>
  );
}

export default App;
