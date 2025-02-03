import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamForm from "./TeamForm";
import Score from "./Score";
import SecondInnings from "./secondinnings";
import EndMatch from "./EndMatch";
import Result from "./result";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamForm />} />
        <Route path="/Score" element={<Score />} />
        <Route path="./secondinnings" element={<SecondInnings />}/>
        <Route path="/EndMatch" element={<EndMatch />} />
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </Router>
  );
}
