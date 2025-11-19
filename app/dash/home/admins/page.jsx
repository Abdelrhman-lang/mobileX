"use client";

import { AdminDialog } from "@/app/_component/AdminDialog";
import AdminsTable from "@/app/_component/AdminsTable";
import Spinner from "@/app/_component/Spinner";
import { UserContext } from "@/context/UserContext";

import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function page() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext);
  const fetchAdmins = async () => {
    try {
      const res = await axios.get("/api/get-all-admins");
      if (res.status === 200) {
        setAdmins(res.data);
      }
    } catch (err) {
      console.error("Cannot Fetch Admins");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAdmins();
  }, []);
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="xl:ml-10 p-6">
        <h1 className="font-bold text-2xl mb-2">Manage your Admins 👋</h1>
        <p className="text-gray-600 mb-8">
          Here you can update and delete your Admins
        </p>

        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Spinner />
          </div>
        ) : (
          <AdminsTable admins={admins} userData={userData} />
        )}
        {userData?.role === "super admin" ? (
          <div className="mt-8 flex justify-end">
            <AdminDialog />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
