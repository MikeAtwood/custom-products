import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </div>
  );
}

export default App;