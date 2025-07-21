import React, { useEffect, useState } from 'react';
import { getAccountDetails, getTransactionHistory } from '../api/api';

const AccountDetails = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [details, setDetails] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const fetchDetails = async () => {
    const accountData = await getAccountDetails(accountNumber);
    const txData = await getTransactionHistory(accountNumber, limit, offset);
    setDetails(accountData);
    setTransactions(txData);
  };

  useEffect(() => {
    if (accountNumber) fetchDetails();
  }, [accountNumber, offset]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Account Details</h1>
      <input
        type="text"
        placeholder="Enter Account Number"
        className="border p-2 mb-4 rounded w-full"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      {details && (
        <div className="mb-6">
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Account Number:</strong> {details.accountNumber}</p>
          <p><strong>Balance:</strong> ₹{details.balance}</p>
        </div>
      )}

      {transactions.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold">Transaction History</h2>
          <ul className="border-t mt-2">
            {transactions.map((tx, idx) => (
              <li key={idx} className="py-2 border-b">
                {tx.type.toUpperCase()} - ₹{tx.amount} on {new Date(tx.date).toLocaleString()}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <button onClick={() => setOffset((prev) => Math.max(prev - limit, 0))} className="bg-gray-300 px-3 py-1 rounded">
              Prev
            </button>
            <button onClick={() => setOffset((prev) => prev + limit)} className="bg-gray-300 px-3 py-1 rounded">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;