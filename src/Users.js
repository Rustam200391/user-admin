import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsersAsync } from "./slice";

const Users = () => {
  const dispatch = useDispatch();
  const { fackeUsers, isLoaded } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  if (!isLoaded) return <div>Loading..</div>;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "6" }}>
        <Link to="/">Home</Link>
        <div style={{ padding: "1em" }}>Hello Users</div>
        {fackeUsers &&
          fackeUsers.map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
