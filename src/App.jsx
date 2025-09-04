import { useState } from "react";
import questionsData from "./data/questions.json";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

function App() {
  const [profession, setProfession] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const professions = Object.keys(questionsData);

  const startQuiz = (prof) => {
    setProfession(prof);
    setQuestion(questionsData[prof][0]);
    setSelected(null);
    setShowResult(false);
  };

  const handleAnswer = (option) => {
    setSelected(option);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setProfession(null);
    setQuestion(null);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Career Path Quiz</h1>
      {!profession ? (
        <div className="grid grid-cols-2 gap-4">
          {professions.map((prof) => (
            <button
              key={prof}
              onClick={() => startQuiz(prof)}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600"
            >
              {prof}
            </button>
          ))}
        </div>
      ) : !showResult ? (
        <QuestionCard
          question={question}
          onAnswer={handleAnswer}
          selected={selected}
        />
      ) : (
        <ResultCard
          question={question}
          selected={selected}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
