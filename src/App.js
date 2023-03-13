import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import UserDetails from "./UserDetails";
import Users from "./Users";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
