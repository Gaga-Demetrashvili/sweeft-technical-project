/** @format */

import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  selectedUsers: [],
  setCurrentUser: () => null,
  setSelectedUsers: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const value = {
    currentUser,
    setCurrentUser,
    selectedUsers,
    setSelectedUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
