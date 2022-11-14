import { v4 as uuid4 } from "uuid";

const InsuaranceTab = () => {
  const insuarances = [
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
    { year: "2022", jan: 100, feb: 234, mar: 10, apr: 38, may: 990, jun: 763, jul: 35, aug: 35, sep: 53, oct: 876, nov: 109, dec: 345 },
  ];

  const calculateTotal = (insuarance: Object): number => {
    let total = 0
    Object.entries(insuarance).map(([key, value]) => { if (key !== "year") total += value })
    return total
  }

  return (
    <table className="w-full table-auto mt-5 rounded">
      <thead>
        <tr className="text-sm text-blue-gray-300">
          <th className="py-1 border border-blue-gray-500/20">Year</th>
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
          <th className="py-1 border border-blue-gray-500/20">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {insuarances.map((insuarance) => (
          <tr key={uuid4()} className="text-sm text-center text-blue-gray-300 hover:bg-blue-gray-500/20 cursor-pointer">
            <td className="py-1 border border-blue-gray-500/20 px-5">{new Date().getFullYear()}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.jan}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.feb}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.mar}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.apr}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.may}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.jun}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.jul}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.aug}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.sep}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.oct}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.nov}</td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {insuarance.dec} </td>
            <td className="py-1 border border-blue-gray-500/20 px-5">$ {calculateTotal(insuarance)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InsuaranceTab;
