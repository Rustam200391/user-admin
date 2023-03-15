import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearPreviousUser, getSelectedUserAsync } from "../store/slice";

const UserDetails = () => {
  const { id } = useParams();
  const { selectedUser, isLoaded } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPreviousUser());
    dispatch(getSelectedUserAsync(id));
  }, [dispatch, id]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/users">Users</Link>
      {selectedUser && (
        <div>
          <div style={{ padding: "1em" }}> {selectedUser.name}</div>
          <p>{selectedUser.username}</p>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.phone}</p>
          <p>{selectedUser.company.name}</p>
        </div>
      )}
    </div>
  );
};
export default UserDetails;
