import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Provider from "./context/Provider";
import SignUp from "./pages/Signup";

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
