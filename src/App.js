import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AdoptionList from "./pages/AdoptionList";
import AdoptionForm from "./pages/AdoptionForm";
import ContactForm from "./pages/ContactForm";
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
    </div>
  );
}

export default App;
