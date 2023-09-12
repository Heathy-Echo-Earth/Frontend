import logo from './logo.svg';
import './App.css';
import Home from './homePage/Home';
import { Route, Routes } from "react-router-dom";
import ContactPage from './contactPage/ContactPage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
