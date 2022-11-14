import { v4 as uuid4 } from "uuid";
import Dashboard from "../Dashboard";
import { IoPersonAdd } from "react-icons/io5";
import { SideBarItem } from "../../../types/next";
import Insuarance from "../../insuarance/Insuarance";
import { MdAttachMoney, MdDashboard } from "react-icons/md";
import AddMemberForm from "../../membership/components/AddMemberForm";

type Props = { selected: SideBarItem | undefined; setSelected: Function };
const SideBar: React.FC<Props> = ({ selected, setSelected }) => {
  const sideItems = [
    { icon: MdDashboard, name: "Dashboard", content: Dashboard },
    { icon: IoPersonAdd, name: "Add Member", content: AddMemberForm },
    { icon: MdAttachMoney, name: "Release Funds", content: Insuarance },
  ];

  return (
    <aside className="max-h-screen w-52 bg-blue-gray-500/10 border-r border-r-blue-gray-600/30 px-2 py-5 space-y-8">
      {sideItems.map((item) => (
        <div key={uuid4()} onClick={(_) => setSelected(item)} className={`flex items-center space-x-3 cursor-pointer ${selected?.name === item.name ? "bg-indigo-500" : "bg-indigo-100 text-blue-gray-700"}  p-2 rounded`}  >
          <item.icon className="h-5 w-5" />
          <span >{item.name}</span>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
