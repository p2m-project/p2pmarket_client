import { Routes, Route } from "react-router-dom";
import SignInScreen from "./pages/auth/signin";
import LandingScreen from "./pages/landing";
import AddProductScreen from "./pages/supplier/products/addProduct";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900 bg-opacity-80 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/signIn" element={<SignInScreen />} />
          <Route exact path="/addProduct" element={<AddProductScreen />} />
          <Route exact path="/" element={<LandingScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
