import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import UserDetailsTab from './UserDetailsTab';
import AccountCreationTab from './AccountCreationTab';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        {/* Header */}
        <header className="bg-red-800 text-white py-4">
          <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold">User Management Dashboard</h1>

          </div>
        </header>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow p-4 bg-white rounded-md shadow-md">

          {/* Routing */}
          <Routes>
            <Route
              path="/dashboard/userDetails"
              element={<div className="bg-white p-8 rounded shadow-md"><UserDetailsTab /></div>}
            />
            <Route
              path="/dashboard/accountCreation"
              element={<div className="bg-white p-8 rounded shadow-md"><AccountCreationTab /></div>}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
