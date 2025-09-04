function ResultCard({ question, selected, resetQuiz }) {
  const isCorrect = selected === question.answer;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[400px] text-center">
      <h2 className="text-xl font-bold mb-4">
        {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
      </h2>
      <p className="mb-2">
        Correct Answer: <b>{question.answer}</b>
      </p>
      <p className="text-gray-600 italic mb-4">{question.fact}</p>
      <button
        onClick={resetQuiz}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
      >
        Play Again
      </button>
    </div>
  );
}
export default ResultCard;
