// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Cleaning from "./pages/Cleaning/Cleaning";
import Plumbing from "./pages/Plumbing/Plumbing";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Provider from "./pages/Provider/Provider";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/provider"
          element={
            <PrivateRoute>
              <Provider />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Cleaning" element={<Cleaning />} />
        <Route path="/Plumbing" element={<Plumbing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
