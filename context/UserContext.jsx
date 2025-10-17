"use client";
import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchUserData = useCallback(async (email) => {
    if (!email) return console.warn("❗ Email is required to fetch user data.");
    try {
      const res = await axios.get(`/api/get-user?email=${email}`);
      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  });
  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}
