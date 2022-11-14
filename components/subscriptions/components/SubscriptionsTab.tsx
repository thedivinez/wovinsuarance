import React from "react";
import { v4 as uuid4 } from "uuid";
import { Checkbox } from "@material-tailwind/react";

const SubscriptionsTab: React.FC = () => {
  const subscriptions = [
    {
      wovnumber: "121265",
      payments: { jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: false, dec: false }
    }
  ];
  return (
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
                  {value ? <Checkbox disabled color="gray" checked={value} name={key} /> : <Checkbox name={key} />}
                </td>
              })
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionsTab;
