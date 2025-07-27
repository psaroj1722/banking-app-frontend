import React, { useEffect, useState } from 'react';

const AllAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5600/account')
      .then((res) => res.json())
      .then((data) => setAccounts(data))
      .catch((err) => console.error('Error fetching accounts:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">All Accounts</h2>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Account Number</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{acc.id}</td>
              <td className="py-2 px-4 border-b">{acc.accountNumber}</td>
              <td className="py-2 px-4 border-b">{acc.name}</td>
              <td className="py-2 px-4 border-b">₹{parseFloat(acc.balance).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAccounts;
