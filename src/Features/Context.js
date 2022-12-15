import React, { useState } from "react";

export const loggedInUser = React.createContext();
export function LoginInnRole(props) {
  const [loggerRole, setLoggerRole] = useState("");

  return (
    <loggedInUser.Provider value={{ loggerRoleKey: loggerRole, setLoggerRole }}>
      {props.children}
    </loggedInUser.Provider>
  );
}
