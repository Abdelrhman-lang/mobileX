export default function UsersTable({ users }) {
  return (
    <div className="relative overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="text-xs  bg-gray-100 border-b border-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              User name
            </th>
            <th scope="col" className="px-6 py-3">
              User Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.phone || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
