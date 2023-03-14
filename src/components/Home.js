import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello Observer</h1>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Home;
