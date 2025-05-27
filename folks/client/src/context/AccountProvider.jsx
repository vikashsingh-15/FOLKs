import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const socket = useRef();

  // useEffect(() => {
  //   socket.current = io("ws://localhost:9000");
  // }, []);

  // useEffect(() => {
  //   socket.current = io(process.env.REACT_APP_SOCKET_URL);
  // }, []);

  useEffect(() => {
    const SOCKET_URL =
      process.env.REACT_APP_SOCKET_URL || "ws://localhost:9000";
    socket.current = io(SOCKET_URL);
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
