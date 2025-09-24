"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useRef } from "react";

export default function ProviderPostUser({ children }) {
  const { user } = useUser();
  const hasPosted = useRef(false);
  useEffect(() => {
    const createNewUser = async () => {
      if (!user || hasPosted.current) return;

      try {
        const res = await axios.post("/api/post-user", {
          name: user?.fullName || "guest",
          email: user?.primaryEmailAddress?.emailAddress,
        });

        hasPosted.current = true;
      } catch (err) {
        console.log("error creating user", err);
      }
    };
    createNewUser();
  }, [user]);
  return <div>{children}</div>;
}
