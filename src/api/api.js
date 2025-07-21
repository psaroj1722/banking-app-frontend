// src/api/api.js
const BASE_URL = 'http://localhost:5600'; // your backend URL

export const createAccount = async (payload) => {
  const res = await fetch(`${BASE_URL}/accounts/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const getAccountDetails = async (accountNumber) => {
  const res = await fetch(`${BASE_URL}/accounts/${accountNumber}`);
  return res.json();
};

export const getTransactionHistory = async (accountNumber, limit, offset) => {
  const res = await fetch(`${BASE_URL}/transactions/history?accountNumber=${accountNumber}&limit=${limit}&offset=${offset}`);
  return res.json();
};

export const performTransaction = async (accountNumber, type, amount) => {
  const res = await fetch(`${BASE_URL}/transactions/${type}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accountNumber, amount }),
  });
  return res.json();
};
