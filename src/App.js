import "./App.css";
import { LandingHomme } from "./pages/landing_home/landing";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/register";
import { Home } from "./pages/home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingHomme />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
