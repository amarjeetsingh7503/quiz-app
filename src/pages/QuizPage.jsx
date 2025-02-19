import { useState } from "react";
import Quiz from "../components/Quiz";
import Scoreboard from "../components/Scoreboard";
import Timer from "../components/Timer";

const QuizPage = () => {
  const [quizOver, setQuizOver] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState([]);

  const handleQuizEnd = (finalScore, attemptData) => {
    setScore(finalScore);
    setAttempts(attemptData);
    setQuizOver(true);
  };

  const restartQuiz = () => {
    setQuizOver(false);
    setScore(0);
    setAttempts([]);
  };

  return (
    <div>
      {!quizOver ? (
        <>
          <Timer duration={1800} onTimeout={() => handleQuizEnd(score, attempts)} />
          <Quiz onQuizEnd={handleQuizEnd} />
        </>
      ) : (
        <Scoreboard score={score} attempts={attempts} restartQuiz={restartQuiz} />
      )}
    </div>
  );
};

export default QuizPage;
