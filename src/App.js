import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AdoptionList from './pages/AdoptionList';
import AdoptionForm from './pages/AdoptionForm';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/adoption' element={<AdoptionList />}></Route>
        <Route path='/adoptionform' element={<AdoptionForm />}></Route>
        <Route path='/contactform' element={<ContactForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
