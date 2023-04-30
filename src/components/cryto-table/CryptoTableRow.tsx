import React, { useEffect } from "react";
import useCrypto from "../../hooks/useCrypto";

const CryptoTableRow = () => {
  const { getAllcoins, cryptoList } = useCrypto();
  useEffect(() => {
    getAllcoins();
  }, []);
  return (
    <table className="border-collapse border border-slate-500 ...">
      <thead>
        <tr>
          <th className="border border-slate-600 ...">State</th>
          <th className="border border-slate-600 ...">City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-700 ...">Indiana</td>
          <td className="border border-slate-700 ...">Indianapolis</td>
        </tr>
        <tr>
          <td className="border border-slate-700 ...">Ohio</td>
          <td className="border border-slate-700 ...">Columbus</td>
        </tr>
        <tr>
          <td className="border border-slate-700 ...">Michigan</td>
          <td className="border border-slate-700 ...">Detroit</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CryptoTableRow;
