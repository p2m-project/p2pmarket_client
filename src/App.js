import { Routes, Route } from "react-router-dom";
import SignInScreen from "./pages/auth/signin";
import LandingScreen from "./pages/landing";

function App() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Routes>
        <Route exact path="/signIn" element={<SignInScreen />} />
        <Route exact path="/" element={<LandingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
