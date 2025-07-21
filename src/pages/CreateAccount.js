import React, { useState } from 'react';
import { createAccount } from '../api/api';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAccount({ name, initialDeposit: parseFloat(initialDeposit) });
      setMessage(`Account created successfully. Account Number: ${response.accountNumber}`);
    } catch (err) {
      setMessage('Error creating account.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Initial Deposit</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="border p-2 rounded w-full"
            required
            min="0"
            step="0.01"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default CreateAccount;