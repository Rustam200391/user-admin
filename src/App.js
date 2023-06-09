import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

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
