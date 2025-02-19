import { useState, useEffect } from "react";
import questions from "../data/questions";
import './Quiz.css';

const Quiz = ({ onQuizEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [inputChecked, setInputChecked] = useState(false);

  useEffect(() => {
    setFeedback("");
    setSelectedOption(null);
    setUserInput("");
    setInputChecked(false);
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    const isCorrect = answer == questions[currentQuestion].answer;
    setScore((prev) => prev + (isCorrect ? 1 : 0));
    setFeedback(isCorrect ? "Correct!" : "Wrong!");
    setSelectedOption(answer);
    setInputChecked(true);
  };

  const recordAttempt = (userAnswer, isCorrect) => {
    setAttempts([...attempts, { question: questions[currentQuestion].question, selectedOption: userAnswer, correct: isCorrect }]);
    currentQuestion < questions.length - 1 ? setCurrentQuestion((prev) => prev + 1) : onQuizEnd(score, attempts);
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestion].question}</h2>

      {questions[currentQuestion].type === "mcq" ? (
        <div className="options">
          {questions[currentQuestion].options.map((option, i) => (
            <button className="option-btn"
             key={i} onClick={() => handleAnswer(option)} disabled={selectedOption}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="input-container">
          <input className="input-field" type="number" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter answer" disabled={inputChecked} />
          <button onClick={() => handleAnswer(userInput)} disabled={inputChecked || !userInput.trim()}>Submit</button>
        </div>
      )}

      <p>{feedback}</p>

      <div className="actions">
        <button onClick={() => recordAttempt("Skipped", false)}>Skip</button>
        {inputChecked && <button onClick={() => recordAttempt(selectedOption || userInput, selectedOption == questions[currentQuestion].answer)}>Next</button>}
      </div>
    </div>
  );
};

export default Quiz;
