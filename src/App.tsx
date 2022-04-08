import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Provider from "./context/Provider";
import MainScreen from "./pages/MainScreen";
import SignUp from "./pages/SignUp";
import "./global.scss";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/main" element={<MainScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
