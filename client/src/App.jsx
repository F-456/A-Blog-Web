import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";


//main function that ties everyting together
function App() {

  return (

    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App
