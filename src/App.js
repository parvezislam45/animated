
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Casino from "./Components/Home/Casino";
import Sports from "./Components/Home/Sports";
import Sidenav from "./Components/Home/Sidenav";
import Dashboard from "./Components/Dashboard";

function App() {
  
  return (
    <div className="bg-black">
      {/* <Dashboard/> */}
      <Sidenav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Sidenav>
    </div>
  );
}

export default App;
