import "./App.css";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import Sider from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
