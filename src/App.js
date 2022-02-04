import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignInScreen from "./pages/auth/signin";
import LandingScreen from "./pages/landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signIn" element={<SignInScreen />} />
          <Route exact path="/" element={<LandingScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
