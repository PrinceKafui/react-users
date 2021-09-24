import React from "react";
import Users from "./Users/Users";

const UserList = ({ users, deleteUser, editUser }) => {
  const UserList = users.map((item) => {
    return <Users users={item} deleteUser={deleteUser} editUser={editUser} />;
  });

  return <div>{UserList}</div>;
};

export default UserList;
