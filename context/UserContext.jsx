"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, isLoaded } = useUser(); // أضفنا isLoaded للتأكد من تحميل بيانات Clerk

  const fetchUserData = useCallback(async (email) => {
    // شيلنا الـ console.warn عشان متزعجكش في البداية
    try {
      const res = await axios.get(`/api/get-user?email=${email}`);
      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    } finally {
      setLoading(false);
    }
  }, []); // الـ dependency array هنا فاضي عشان الـ useCallback

  useEffect(() => {
    // التأكد إن Clerk خلص تحميل (isLoaded) وإن فيه مستخدم (user)
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    
    if (isLoaded && userEmail) {
      fetchUserData(userEmail);
    } else if (isLoaded && !user) {
      // لو Clerk خلص تحميل ومفيش مستخدم، نوقف الـ loading
      setLoading(false);
    }
  }, [user, isLoaded, fetchUserData]);

  return (
    <UserContext.Provider value={{ userData, loading }}>
      {children}
    </UserContext.Provider>
  );
}