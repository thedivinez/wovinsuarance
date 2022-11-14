import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { FiSearch } from "react-icons/fi";
import { FaMoneyCheck } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { Card } from "@material-tailwind/react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import AddMember from "../membership/components/AddMember";
import MembersTab from "../membership/components/MembersTab";
import InsuaranceTab from "../insuarance/components/InsuaranceTab";
import UpdateInsuarance from "../insuarance/components/UpdateInsuarance";
import SubscriptionsTab from "../subscriptions/components/SubscriptionsTab";
import AddSubscriptions from "../subscriptions/components/AddSubscriptions";

const Dashboard: React.FC = () => {
  const tabs = [
    { name: "Members", button: AddMember, content: MembersTab },
    { name: "Subscriptions", content: SubscriptionsTab, button: AddSubscriptions },
    { name: "Insuarance", content: InsuaranceTab, button: UpdateInsuarance },
  ];
  const stats = [
    { lable: "12,390", title: "Members", icon: BsPeopleFill },
    { lable: "$4,200", title: "Subscriptions", icon: FaMoneyCheck },
    { lable: "$1,200", title: "Insuarance", icon: RiMoneyDollarCircleFill },
  ];
  const [selectedTab, setselectedTab] = useState(tabs[0]);

  return (
    <section className="flex flex-col items-center p-5 h-full w-full">
      <div className="flex w-full justify-between h-24 mb-20">
        {stats.map((data) => (
          <Card key={uuid4()} className="flex flex-row items-center justify-center w-64 h-52 bg-indigo-500 rounded-md text-white space-x-4 text-center">
            <div className="rounded-full bg-main p-4">
              <data.icon className="h-4 w-4" />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-bold">{data.title}</span>
              <span className="text-green-400 font-bold">{data.lable}</span>
            </div>
          </Card>
        ))}
      </div>
      <div className="w-full justify-between flex p-5 outline outline-1 outline-gray-50/10 rounded items-center mt-28">
        <div className="flex space-x-10 w-full">
          {tabs.map((tab) => (
            <div key={uuid4()} onClick={(_) => setselectedTab(tab)} className={`underline-offset-8 cursor-pointer font-bold ${selectedTab.name == tab.name && "underline decoration-indigo-400 text-indigo-400"}`}            >
              <span>{tab.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full space-x-3 items-center">
          <div className="relative  w-96">
            <button type="submit" className="absolute left-3 top-3">
              <FiSearch />
            </button>
            <input name="search" placeholder="Search" className="border border-gray-300/20 bg-transparent w-full h-10 px-5 pl-8 rounded-lg text-sm outline-none" />
          </div>
          {/* <selectedTab.button /> */}
        </div>
      </div>
      <selectedTab.content />
    </section>
  );
};
export default Dashboard;
