import React from "react";

import UserSearch from "./user-search";
import UserList from "./main";
import UserTitle from "./user-title";

const UserContainer: React.FC<any> = () => {
  return (
    <>
      <UserTitle />
      <UserSearch />
      <UserList />
    </>
  );
};

export default UserContainer;
