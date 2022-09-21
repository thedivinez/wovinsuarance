import { v4 as uuid4 } from "uuid";

const InsuaranceTab = () => {
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
  );
};

export default InsuaranceTab;
