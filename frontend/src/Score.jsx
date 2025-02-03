import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import SecondInnings from "./secondinnings";

export default function Score() {
  const location = useLocation();
  const formData = location.state;
  const tossWinner = formData?.toss === "team1" ? formData?.team1name : formData?.team2name;
  const team1 = formData?.team1name;
  const team2 = formData?.team2name;
  const choose = formData?.batbowl;
  const over = formData?.overs;

  const [runs, setruns] = useState(0);
  const [wicket, setwicket] = useState(0);
  const [balls, setballs] = useState(over * 6);
  const [history, sethistory] = useState([]);

  var bat;
  var bowl;
  if ((tossWinner === team1 && choose === "bat") || (tossWinner === team2 && choose === "bowl")) {
    bat = team1;
    bowl = team2;
  } else {
    bat = team2;
    bowl = team1;
  }

  const saveHistory = () => {
    sethistory((prev) => [...prev, { runs, wicket, balls }]);
  };

  const handleRuns = (e) => {
    saveHistory();
    setruns(runs => Number(runs) + Number(e.target.value));
    setballs(balls => balls - 1);
  };

  const handleWicket = (e) => {
    saveHistory();
    setwicket(wicket => Number(wicket) + Number(e.target.value));
    setballs(balls => balls - 1);
  };

  const handleWide = (e) => {
    saveHistory();
    const widerun = prompt("Message to the user", "0");
    setruns(runs => Number(runs) + 1 + Number(widerun));
  };

  const handleNoball = (e) => {
    saveHistory();
    const noballrun = prompt("Message to the user", "0");
    setruns(runs => Number(runs) + 1 + Number(noballrun));
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setruns(lastState.runs);
      setwicket(lastState.wicket);
      setballs(lastState.balls);
      sethistory((prev) => prev.slice(0, -1)); // Remove the last history entry
    }
  };

  return (
    <>
      <div className="bg-gray-400 min-h-screen">
        <Heading />
        {balls > 0 && wicket < 10 ? (
          <div className="container mx-auto p-4">
            <h1 className="text-center text-4xl font-bold mb-4 text-gray-900">{team1} <span className="text-blue-600">vs</span> {team2}</h1>
            <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">{bat}: {runs}/{wicket} ({balls} Balls Remaining)</h1>
            <div className="max-w-md mx-auto p-6 bg-gray-200 rounded-2xl shadow-lg">
              <div className="grid grid-cols-3 gap-4 mt-6">
                <button value="1" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  1
                </button>
                <button value="2" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  2
                </button>
                <button value="3" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  3
                </button>
                <button value="4" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  4
                </button>
                <button value="5" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  5
                </button>
                <button value="6" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  6
                </button>
                <button value="0" onClick={handleRuns} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  0
                </button>
                <button value="1" onClick={handleWide} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  Wide
                </button>
                <button onClick={handleNoball} className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transform hover:scale-105 transition duration-200">
                  No Ball
                </button>
                <button onClick={handleUndo} className="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-black-500 transform hover:scale-105 transition duration-200">
                  Undo
                </button>
                <button value="1" onClick={handleWicket} className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105 transition duration-200">
                  Wicket
                </button>
              </div>
            </div>
          </div>
        ) : (
          <SecondInnings team1={team1} team2={team2} over={over} target={runs + 1} bat={bowl} bowl={bat} />
        )}
      </div>
    </>
  );
}
