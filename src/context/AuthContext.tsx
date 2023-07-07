"use client";
import React, { useState, useEffect } from "react";
import {User as FirebaeUser} from 'firebase/auth';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "@/firebase/config";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";

const auth = getAuth(app);

export const AuthContext = React.createContext(null);

export const useAuthContext = () => React.useContext(AuthContext);

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={user}>
    {loading ? <LoadingBody /> : children}
    </AuthContext.Provider>;
};
