import React from "react";
import { v4 as uuid4 } from "uuid";
import { FiSearch } from "react-icons/fi";
import UpdateSubscriptions from "./components/AddSubscriptions";

const Subscriptions: React.FC = () => {
  const beneficiaries = [
    {
      wovnumber: "121265",
      jan: 100,
      feb: 234,
      mar: 10,
      apr: 38,
      may: 990,
      jun: 763,
      jul: 35,
      aug: 35,
      sep: 53,
      oct: 876,
      nov: 109,
      dec: 345,
    },
  ];
  return (
    <div className="flex flex-col px-5">
      <div className="w-full justify-between flex p-5 outline outline-1 outline-gray-50/10 rounded items-center mt-5">
        <span>Subscriptions</span>
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
          <UpdateSubscriptions />
          <button className="bg-indigo-400/80 rounded-md px-3 h-10">
            Report
          </button>
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
          {beneficiaries.map((beneficiary) => (
            <tr
              key={uuid4()}
              className="text-sm text-center text-blue-gray-300 hover:bg-blue-gray-500/20 cursor-pointer"
            >
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.wovnumber}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.jan}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.feb}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.mar}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.apr}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.may}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.jun}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.jul}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.aug}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.sep}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.oct}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.nov}
              </td>
              <td className="py-1 border border-blue-gray-500/20 px-5">
                {beneficiary.dec}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subscriptions;
