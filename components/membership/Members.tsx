import { FiSearch } from "react-icons/fi";
import AddMember from "./components/AddMember";
import AddMemberForm from "./components/AddMemberForm";

const Members: React.FC = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="w-full justify-between flex p-5 outline outline-1 outline-gray-50/10 rounded items-center mt-5">
        <span>Members</span>
        <div className="flex justify-end w-full space-x-3 items-center">
          <div className="relative  w-96">
            <button type="submit" className="absolute left-3 top-3">
              <FiSearch />
            </button>
            <input name="search" placeholder="Search" className="border border-gray-300/20 bg-transparent w-full h-10 px-5 pl-8 rounded-lg text-sm outline-none" />
          </div>
          <AddMember />
          <button className="bg-indigo-400/80 rounded-md px-3 h-10">            Report</button>
        </div>
      </div>
      <AddMemberForm />
    </div>
  );
};
export default Members;
