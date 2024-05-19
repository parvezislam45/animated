
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import SideBar from "./Components/Sidebar/SideBar";
import Home from "./Components/Home/Home";
import Footer1 from "./Components/Footer1";
import Casino from "./Components/Home/Casino";
import Sports from "./Components/Home/Sports";

function App() {
  
  return (
    <div className="App bg-black">
      <NavBar />
    
        
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Login />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
        <Footer1/>
      </SideBar>
 
    
    </div>
  );
}

export default App;
