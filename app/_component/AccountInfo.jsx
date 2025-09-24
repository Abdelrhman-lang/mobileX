export default function AccountInfo({ username, email, orders }) {
  const fields = [
    { id: 1, label: "Name", value: username },
    { id: 2, label: "Email", value: email },
    { id: 3, label: "Orders", value: orders },
  ];
  return (
    <main>
      {fields.map((field) => {
        return (
          <div key={field.id} className="mb-10 text">
            <label className="text-sm text-primary mb-2 block">
              {field.label}
            </label>
            <input
              className="w-full border py-3 px-4 focus:outline-black"
              defaultValue={field.value}
            />
          </div>
        );
      })}
    </main>
  );
}
