import Image from "next/image";
import { v4 as uuid4 } from "uuid";
import Dashboard from "../Dashboard";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import Members from "../../membership/Members";
import { SideBarItem } from "../../../types/next";
import Insuarance from "../../insuarance/Insuarance";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Subscriptions from "../../subscriptions/Subscriptions";

type Props = { selected: SideBarItem | undefined; setSelected: Function };
const SideBar: React.FC<Props> = ({ selected, setSelected }) => {
  const sideItems = [
    {
      name: "Dashboard",
      icon: AiFillHome,
      content: Dashboard,
    },
    {
      icon: BsPeopleFill,
      name: "Members",
      content: Members,
    },
    {
      icon: RiMoneyDollarCircleFill,
      name: "Insuarance",
      content: Insuarance,
    },
    {
      icon: FaMoneyCheck,
      name: "Subscriptions",
      content: Subscriptions,
    },
  ];

  return (
    <aside className="h-screen w-52 bg-blue-gray-500/10 border-r border-r-blue-gray-600/30 px-2 py-5 space-y-8">
      <div className="w-full h-8 relative mb-10">
        <Image
          layout="fill"
          alt="W.O.V Logo"
          src="/img/wov.png"
          objectFit="contain"
        />
      </div>
      {sideItems.map((item) => (
        <div
          key={uuid4()}
          onClick={(_) => setSelected(item)}
          className={`flex items-center space-x-3 cursor-pointer ${
            selected?.name === item.name && "text-light-blue-500"
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span className="mt-0.5">{item.name}</span>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
