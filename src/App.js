import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Auth/Signup.jsx";
import Dashboard from "./component/dashboard/Dashboard.jsx";
import Login from "./component/Auth/Login.jsx";
import Errror from "./component/Error";
import AddFavourite from "./component/AddtoFav/AddToFavourites";
import Overview from "./component/Movie overview/Overview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Errror />} />
        <Route path="/favourite" element={<AddFavourite />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
