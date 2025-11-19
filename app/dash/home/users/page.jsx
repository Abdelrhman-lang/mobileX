"use client";

import Spinner from "@/app/_component/Spinner";
import UsersTable from "@/app/_component/UsersTable";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/get-all-users");
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (err) {
      console.error("Cannot Fetching Users", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="xl:ml-10 p-6">
        <h1 className="font-bold text-2xl mb-2">Manage your Users 👋</h1>
        <p className="text-gray-600 mb-8">Here you can View your Users</p>

        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Spinner />
          </div>
        ) : (
          <UsersTable users={users} />
        )}
        {/* <div className="mt-8 flex justify-end">
          <AdminDialog />
        </div> */}
      </div>
    </section>
  );
}
