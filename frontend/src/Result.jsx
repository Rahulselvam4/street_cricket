import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from "./Heading";
const Result = () => {
    const [team, setTeam] = useState([]);
    const navigate = useNavigate()

    const navhome = () =>
    {
        navigate('/');
    }

    useEffect(() => {
        axios.get("http://localhost:3000")
            .then((res) => setTeam(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
    <   >
        <Heading/>
        <div className="flex flex-col items-center  min-h-screen bg-gray-400 text-black p-4">
            <h1 className="text-3xl font-bold mb-6 leading-none tracking-tight">MATCH RESULTS</h1>
            <div className="w-full max-w-4xl overflow-x-auto">
                <table className="w-full border-collapse border border-blue-600 text-center">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="border border-blue-900 px-4 py-2 text-white">TEAM 1</th>
                            <th className="border border-blue-900 px-4 py-2 text-white">TEAM 2</th>
                            <th className="border border-blue-900 px-4 py-2 text-white">RESULT</th>
                            <th className="border border-blue-900 px-4 py-2 text-white">SUMMARY</th>

                        </tr>
                    </thead>
                    <tbody>
                        {team.length > 0 ? (
                            team.map((t) => (
                                <tr key={t._id} className="bg-gray-500 hover:bg-gray-600 transition">
                                    <td className="border border-gray-600 px-4 py-2 text-white">{t.team1}</td>
                                    <td className="border border-gray-600 px-4 py-2 text-white">{t.team2}</td>
                                    <td className="border border-gray-600 px-4 py-2 text-white">{t.result}</td>
                                    <td className="border border-gray-600 px-4 py-2 text-white">{t.summary}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="border border-gray-600 px-4 py-2 text-gray-400">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <button onClick={navhome} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 ml-6">Home</button>
        </div>
    </>
  )
}

export default Result;
