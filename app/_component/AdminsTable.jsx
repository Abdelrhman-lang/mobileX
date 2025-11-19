import { Trash } from "lucide-react";
import React from "react";

export default function AdminsTable({ admins, userData }) {
  return (
    <div className="relative overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="text-xs  bg-gray-100 border-b border-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              Admin name
            </th>
            <th scope="col" className="px-6 py-3">
              Admin Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            {userData?.role === "super admin" ? (
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            ) : (
              ""
            )}
          </tr>
        </thead>

        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id} className="border-b hover:bg-gray-50 transition">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {admin.name}
              </th>
              <td className="px-6 py-4">{admin.email}</td>
              <td className="px-6 py-4">{admin.role}</td>
              {userData?.role === "super admin" ? (
                <td className="px-6 py-4">
                  <button className="cursor-pointer">
                    <Trash size={18} />
                  </button>
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
