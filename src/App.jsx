import { useState } from 'react'
import './App.css'

function App() {
    const users = [
      { name: "Sami", role: "Manager", email: "john.michael@example.com", location: "New York, USA" },
      { name: "Mashal", role: "Developer", email: "alexa.liras@example.com", location: "San Francisco, USA" },
      { name: "Ghani", role: "Executive", email: "laurent.perrier@example.com", location: "Paris, France" },
      { name: "Hashir", role: "Developer", email: "michael.levi@example.com", location: "London, UK" },
    ];
  
    return (
      <div className="relative w-full h-full overflow-hidden text-slate-300 bg-slate-800 shadow-md rounded-lg">
        {/* Table for larger screens */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="bg-slate-700">
                <th className="p-4 border-b border-slate-600">Name</th>
                <th className="p-4 border-b border-slate-600">Role</th>
                <th className="p-4 border-b border-slate-600">Email</th>
                <th className="p-4 border-b border-slate-600">Location</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-slate-700">
                  <td className="p-4 border-b border-slate-700">{user.name}</td>
                  <td className="p-4 border-b border-slate-700">{user.role}</td>
                  <td className="p-4 border-b border-slate-700">{user.email}</td>
                  <td className="p-4 border-b border-slate-700">{user.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Cards for smaller screens */}
        <div className="md:hidden flex flex-col gap-4 p-4">
          {users.map((user, index) => (
            <div key={index} className="p-4 bg-slate-700 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-slate-100">{user.name}</p>
              <p className="text-sm text-slate-300">Role: {user.role}</p>
              <p className="text-sm text-slate-300">Email: {user.email}</p>
              <p className="text-sm text-slate-300">Location: {user.location}</p>
            </div>
          ))}
        </div>
      </div>

  )
}

export default App
