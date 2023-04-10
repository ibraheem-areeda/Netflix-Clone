import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home/Home";
import './App.css';
import Header from "./components/Navbar/Navbar.js"
import FavList from "./components/FavList/FavList.js"
function App() {
  return (
    <div >

      <Header />

      <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/favorite" element={<FavList />} />

      </Routes>

      
    </div>
  );
}

export default App;
