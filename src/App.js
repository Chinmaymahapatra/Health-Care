import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Navbar title="HealthCare" />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
