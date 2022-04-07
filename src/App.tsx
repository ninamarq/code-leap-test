import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Provider from "./context/Provider";
import SignUp from "./pages/SignUp/Signup";
import "./global.scss";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
