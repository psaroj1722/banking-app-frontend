import './App.css';
import CreateAccount from './pages/CreateAccount';
import AccountDetails from './pages/AccountDetails';
import Transaction from './pages/Transaction';
import { Link, Route, Routes } from 'react-router-dom';
import AllAccounts from './pages/AllAccounts';



function App() {
  return (
    <>
       <div className="p-4">
        <nav className="mb-6 flex gap-4">
          <Link to="/" className="text-blue-600">Create Account</Link>
          <Link to="/all-accounts" className="text-blue-600">All Account Details</Link>
          {/* <Link to="/account" className="text-blue-600">Account Details</Link> */}
          <Link to="/transaction" className="text-blue-600">Transaction</Link>
        </nav>

        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path='/all-accounts' element={<AllAccounts/>} />
          {/* <Route path="/account" element={<AccountDetails />} /> */}
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </div>
    </>

  );
}

export default App;

