import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SecondInnings = (props) => {
  const overs = props.over * 6;
  const navigate = useNavigate();
  const [runs, setruns] = useState(0);
  const [wicket, setwicket] = useState(0);
  const [balls, setballs] = useState(overs);
  const [history, sethistory] = useState([]);
  const [team1, setTeam1] = useState(props.bat);
  const [team2, setTeam2] = useState(props.bowl);
  const [result, setWon] = useState(null);
  const [summary,setSummary]=useState("");
  const saveHistory = () => {
    sethistory((prev) => [...prev, { runs, wicket, balls }]);
  };

  const handleRuns = (e) => {
    saveHistory();
    setruns((runs) => Number(runs) + Number(e.target.value));
    setballs((balls) => balls - 1);
  };
  
  const handleWicket = (e) => {
    saveHistory();
    setwicket((wicket) => Number(wicket) + Number(e.target.value));
    setballs((balls) => balls - 1);
  };

  const handleWide = (e) => {
    saveHistory();
    const widerun = prompt("Message to the user", "0");
    setruns((runs) => Number(runs) + 1 + Number(widerun));
  };

  const handleNoball = (e) => {
    saveHistory();
    const noballrun = prompt("Message to the user", "0");
    setruns((runs) => Number(runs) + 1 + Number(noballrun));
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
  useEffect(() => {
    let results = null;
    let matchSummary = "";

    if (props.target - 1 === runs && balls === 0) {
      results = "draw";
      matchSummary = "MATCH DRAW";
    } else if (wicket >= 10 && props.target - 1 > runs) {
      results = props.bowl;
      matchSummary = `${props.bowl} WON BY ${props.target - runs} RUNS`;
    } else if (wicket >= 10 && props.target - 1 === runs) {
      results = "draw";
      matchSummary = "MATCH DRAW";
    } else if (runs >= props.target && balls >= 0) {
      results = props.bat;
      matchSummary = `${props.bat} WON BY ${10 - wicket} WICKET`;
    } else if (balls <= 0 && props.target > runs) {
      results = props.bowl;
      matchSummary = `${props.bowl} WON BY ${props.target - runs} RUNS`;
    }

    if (results) {
      setWon(results);
      setSummary(matchSummary);

      // Ensure navigation happens AFTER state updates
      setTimeout(() => {
        navigate("/EndMatch", { state: { result: results, team1, team2, summary: matchSummary } });
      }, 0);
    }
  }, [runs, balls, wicket, props.bat, props.bowl, props.target, navigate]);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-4xl font-bold mb-4 text-gray-900">{props.team1} <span className="text-blue-600">vs</span> {props.team2}</h1>
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">{props.bat}: {runs}/{wicket} ({balls} Balls Remaining)</h1>
        <h1 className="mr-8 flex justify-center mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-black">
          <>TARGET:{props.target}</>
        </h1>
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-2xl shadow-lg">
          <div className="grid grid-cols-3 gap-4 mt-6">
            <button
              value="1"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              1
            </button>
            <button
              value="2"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              2
            </button>
            <button
              value="3"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              3
            </button>
            <button
              value="4"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              4
            </button>
            <button
              value="5"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              5
            </button>
            <button
              value="6"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              6
            </button>
            <button
              value="0"
              onClick={handleRuns}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              0
            </button>
            <button
              value="1"
              onClick={handleWide}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Wide
            </button>
            <button
              onClick={handleNoball}
              className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              No Ball
            </button>
            <button onClick={handleUndo} className="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-black-500">
              Undo
            </button>
            <button
              value="1"
              onClick={handleWicket}
              className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Wicket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondInnings;
