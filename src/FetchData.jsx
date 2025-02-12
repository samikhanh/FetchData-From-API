import React, { useEffect, useState } from "react";
import axios from 'axios'
function FetchData(){
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setdata(res.data))
        .catch((err) => console.error("Error fetching data:", err));
    },
    [])
return(

     <div className="relative w-full h-full overflow-hidden text-slate-300 bg-slate-800 shadow-md rounded-lg">
        {/* Table for larger screens */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="bg-slate-700">
                <th className="p-4 border-b border-slate-600">ID</th>
                <th className="p-4 border-b border-slate-600">Name</th>
                <th className="p-4 border-b border-slate-600">Email</th>
                <th className="p-4 border-b border-slate-600">City</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="hover:bg-slate-700">
                  <td className="p-4 border-b border-slate-700">{user.id}</td>
                  <td className="p-4 border-b border-slate-700">{user.name}</td>
                  <td className="p-4 border-b border-slate-700">{user.email}</td>
                  <td className="p-4 border-b border-slate-700">{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

)
}
export default FetchData