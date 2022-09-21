import { v4 as uuid4 } from "uuid";
const MembersTab = () => {
  const members = [
    {
      wovnumber: "121265",
      city: "Harare",
      phone: "+263717089",
      category: "Platinum",
      lastname: "Moyoe",
      firstname: "Chie",
    },
  ];
  return (
    <table className="w-full table-auto mt-5 rounded">
      <thead>
        <tr className="text-sm text-blue-gray-300">
          <th className="py-1 border border-blue-gray-500/20">W.O.V #</th>
          <th className="py-1 border border-blue-gray-500/20">Firstname</th>
          <th className="py-1 border border-blue-gray-500/20">Surname</th>
          <th className="py-1 border border-blue-gray-500/20">City</th>
          <th className="py-1 border border-blue-gray-500/20">Phone</th>
          <th className="py-1 border border-blue-gray-500/20">Category</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr
            key={uuid4()}
            className="text-sm text-center text-blue-gray-300 hover:bg-blue-gray-500/25 cursor-pointer"
          >
            <td className="py-1 border border-blue-gray-500/20 px-5">
              {member.wovnumber}
            </td>
            <td className="py-1 border border-blue-gray-500/20 px-5">
              {member.firstname}
            </td>
            <td className="py-1 border border-blue-gray-500/20 px-5">
              {member.lastname}
            </td>
            <td className="py-1 border border-blue-gray-500/20 px-5">
              {member.city}
            </td>
            <td className="py-1 border border-blue-gray-500/20 px-5">
              {member.phone}
            </td>
            <td className="py-1 border border-blue-gray-500/20 px-5">
              {member.category}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MembersTab;
