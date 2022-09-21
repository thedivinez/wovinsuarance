import { v4 as uuid4 } from "uuid";
import { FiSearch } from "react-icons/fi";
import AddMember from "./components/AddMember";

const Members: React.FC = () => {
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
    <div className="flex flex-col px-5">
      <div className="w-full justify-between flex p-5 outline outline-1 outline-gray-50/10 rounded items-center mt-5">
        <span>Members</span>
        <div className="flex justify-end w-full space-x-3 items-center">
          <div className="relative text-gray-400 w-96">
            <button type="submit" className="absolute left-3 top-3">
              <FiSearch />
            </button>
            <input
              name="search"
              placeholder="Search"
              className="border border-gray-300/20 bg-transparent w-full h-10 px-5 pl-8 rounded-lg text-sm outline-none"
            />
          </div>
          <AddMember />
          <button className="bg-indigo-400/80 rounded-md px-3 h-10">
            Report
          </button>
        </div>
      </div>
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
    </div>
  );
};
export default Members;
