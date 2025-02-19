import { useNavigate } from "react-router-dom";
import './Scoreboard.css'

const Scoreboard = ({ score, attempts }) => {
  const navigate = useNavigate();

  return (
    <div className="scoreboard">
      <h2>Quiz Over!</h2>
      <p>Your Score: {score} / {attempts.length}</p>
      <br/>
      <h3>Attempt History:</h3>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            {attempt.question} - {attempt.selectedOption} 
            {attempt.selectedOption === "Skipped" ? " ⏭️" : attempt.selectedOption === "Not Answered" ? " 🕒" : attempt.correct ? " ✅" : " ❌"}
          </li>
        ))}
      </ul>
      <br/>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/")}>Reattempt Quiz</button>
    </div>
  );
};

export default Scoreboard;
