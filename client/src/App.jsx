import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateACC from "./pages/CreateAccount.jsx";
import Login from "./pages/login.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";

//main function that ties everyting together
function App() {

  return (

    <Router>
      <Link to="/">Home</Link>
      <Routes>
        <Route index element={<Home />} />
        {/* Route path require import function from location file instead of linking pages*/}
        <Route path="/CreateAccount" element={<CreateACC />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateBlog" element={<CreateBlog />} />
      </Routes>
    </Router>

  );
}

export default App
