import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    const fetchedUsers = async () => {
      setisLoading(true);
      try {
        const response = await axios.get("https://panorbit.in/api/users.json");
        const data = await response.data.users;
        setUsers(data);
        setisLoading(false);
      } catch (error) {
        console.error(error);
        setisLoading(false);
      }
    };

    fetchedUsers();
  }, []);

  const fetchSingleUser = async (id) => {
    
    const user = users.find(user => user.id == id)
    setUserDetails(user)
  }


  return (
    <UserContext.Provider value={{ users, setUsers, isLoading, fetchSingleUser, userDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => useContext(UserContext);

export default UserContextProvider;
