import React, { useState } from 'react';
import { performTransaction } from '../api/api';

const Transaction = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('credit');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await performTransaction(accountNumber, type, parseFloat(amount));
      setMessage(`Transaction successful. Updated Balance: ₹${response.newBalance}`);
    } catch (err) {
      setMessage('Transaction failed.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Perform Transaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Account Number</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full"
            required
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label className="block mb-1">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded w-full">
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default Transaction;