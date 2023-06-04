import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
    //   console.log({ user });
      if (user) {
        const { displayName, email, uid, photoUrl } = user;
        setUser({
          displayName,
          email,
          uid,
          photoUrl,
        });
        console.log( user.displayName);
        setIsLoading(false);
        navigate("/");
      }
      // navigate("/");
      // navigate('/')  fix login with facebook
    });
    // clean up function

    return () => {
        unsubscribed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
      {/* {children} */}
    </AuthContext.Provider>
  );
}
