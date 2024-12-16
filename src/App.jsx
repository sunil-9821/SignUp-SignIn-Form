import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import {
  Navbar,
  SignUp,
  Login,
  Router,
  Route,
  Routes,
  DashBoard,
} from "./Components/Index";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#01101a";
      document.body.style.color = "#f8f9fa";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "#d0d4d8";
      document.body.style.color = "#080808";
      setMode("light");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        theme={mode === "light" ? "light" : "dark"}
        autoClose={2000}
        closeOnClick
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Login mode={mode} />} />
          <Route path="/signin" element={<SignUp mode={mode} />} />
          <Route path="/dashboard" element={<DashBoard mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
