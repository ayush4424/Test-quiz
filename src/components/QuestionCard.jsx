function QuestionCard({ question, onAnswer, selected }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[400px]">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt)}
            className={`px-4 py-2 rounded-lg border ${
              selected === opt ? "bg-blue-400 text-white" : "bg-gray-100"
            } hover:bg-blue-300`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
export default QuestionCard;
