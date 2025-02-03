import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios"; 
import Heading from "./Heading";

function EndMatch() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, team1, team2, summary } = location.state || {};

  const showresult = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000", { team1, team2, result, summary })
      .then(() => {
        console.log("Data posted successfully!");
        navigate("/result");
      })
      .catch(err => console.error("Error posting data:", err));
  };

  // Handle match draw case separately
  const isDraw = result.toLowerCase().includes("draw");
  const winningTeam = isDraw ? "Match Draw" : (team1.includes(result) ? team1 : team2.includes(result) ? team2 : result);

  // Split summary while handling draw case
  const summaryParts = isDraw ? [summary] : summary.split(winningTeam);

  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-black dark:bg-gray-400">
        <Heading />  
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight px-4">
            {summaryParts[0]}
            {!isDraw && <span className="text-blue-500"> {winningTeam} </span>}
            {summaryParts[1] || ""}
          </h1>

          <div className="flex justify-center mt-10"> 
            <button
              onClick={showresult}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transition duration-300"
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndMatch;
