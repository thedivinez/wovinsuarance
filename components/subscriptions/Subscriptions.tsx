import React from "react";
import { v4 as uuid4 } from "uuid";
import { FiSearch } from "react-icons/fi";
import { Checkbox } from "@material-tailwind/react";

const Subscriptions: React.FC = () => {
  const subscriptions = [
    {
      wovnumber: "121265",
      payments: {
        jan: true,
        feb: true,
        mar: true,
        apr: true,
        may: true,
        jun: true,
        jul: true,
        aug: true,
        sep: true,
        oct: true,
        nov: false,
        dec: false,
      }
    }
  ];
  return (
    <div className="flex flex-col px-5">
      <div className="w-full justify-between flex p-5 outline outline-1 outline-gray-50/10 rounded items-center mt-5">
        <span>Subscriptions</span>
        <div className="flex justify-end w-full space-x-3 items-center">
          <div className="relative  w-96">
            <button type="submit" className="absolute left-3 top-3">
              <FiSearch />
            </button>
            <input name="search" placeholder="Search" className="border border-gray-300/20 bg-transparent w-full h-10 px-5 pl-8 rounded-lg text-sm outline-none" />
          </div>
          <button className="bg-indigo-400/80 rounded-md px-3 h-10">Report</button>
        </div>
      </div>
      <table className="w-full table-auto mt-5 rounded">
        <thead>
          <tr className="text-sm text-blue-gray-300">
            <th className="py-1 border border-blue-gray-500/20">W.O.V #</th>
            <th className="py-1 border border-blue-gray-500/20">January</th>
            <th className="py-1 border border-blue-gray-500/20">February</th>
            <th className="py-1 border border-blue-gray-500/20">March</th>
            <th className="py-1 border border-blue-gray-500/20">April</th>
            <th className="py-1 border border-blue-gray-500/20">May</th>
            <th className="py-1 border border-blue-gray-500/20">June</th>
            <th className="py-1 border border-blue-gray-500/20">July</th>
            <th className="py-1 border border-blue-gray-500/20">Augast</th>
            <th className="py-1 border border-blue-gray-500/20">September</th>
            <th className="py-1 border border-blue-gray-500/20">October</th>
            <th className="py-1 border border-blue-gray-500/20">November</th>
            <th className="py-1 border border-blue-gray-500/20">December</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={uuid4()} className="text-sm text-center text-blue-gray-300 hover:bg-blue-gray-500/20 cursor-pointer">
              <td className="py-1 border border-blue-gray-500/20 px-5">{subscription.wovnumber}</td>
              {
                Object.entries(subscription.payments).map(([key, value]) => {
                  return <td className="py-1 border border-blue-gray-500/20 px-5" key={key}>
                    {value ? <Checkbox disabled={value} color={value ? "gray" : "blue"} checked={value} /> : <Checkbox />}
                  </td>
                })
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscriptions;
