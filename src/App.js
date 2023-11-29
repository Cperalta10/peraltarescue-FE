import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AdoptionList from "./pages/AdoptionList/AdoptionList";
import AdoptionForm from "./pages/AdoptionForm/AdoptionForm";
import ContactForm from "./pages/ContactForm/ContactForm";
import Logo from "./data/img/PRlogo.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logoName">
          <img src={Logo} height="100px" alt="cat" />
          <Link to="/" className="titleLink">
            <h1>Peralta's Cat Rescue</h1>
          </Link>
        </div>
        <nav>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/adoption" className="navLink">
            Cats to Adopt
          </Link>
          <Link to="/adoptionform" className="navLink">
            Adoption Form
          </Link>
          <Link to="/contactform" className="navLink">
            Contact
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adoption" element={<AdoptionList />}></Route>
        <Route path="/adoptionform" element={<AdoptionForm />}></Route>
        <Route path="/contactform" element={<ContactForm />}></Route>
      </Routes>

      <div className="botHome">
        <h2>Peralta's Cat Rescue</h2>
        <p className="est">Est. October, 2023</p>
        <p>Non-profit organization</p>
        {/* <p>Rescue for cats</p> */}
        <p>Ontario, California</p>
        <div className="donate">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input type="hidden" name="business" value="2BQN73RCV43XL" />
            <input type="hidden" name="no_recurring" value="0" />
            <input
              type="hidden"
              name="item_name"
              value="Please do not donate. This website was created for my resume."
            />
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
