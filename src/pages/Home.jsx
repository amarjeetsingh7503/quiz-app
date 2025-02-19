import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Quiz</h1>
      <div className="home-body">
        <h2>Instructions:</h2>
        <ul>
          <li>For multiple-choice questions, select the one best answer (A, B, C, or D).</li>
          <li>For integer-type questions, write your numerical answer clearly.</li>
          <li>No calculators unless specified.</li>
          <li>You have 30 minutes to complete this quiz.</li>
        </ul>
      </div>
      <button className="home-btn" onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Home;
