import React, { useState } from 'react'
import questionsData from './questions.json'

export default function App() {
  const [career, setCareer] = useState("")
  const [questions, setQuestions] = useState([])
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleCareerSelect = (e) => {
    const selectedCareer = e.target.value
    setCareer(selectedCareer)
    setQuestions(questionsData[selectedCareer] || [])
    setCurrentQ(0)
    setScore(0)
    setShowScore(false)
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    const nextQ = currentQ + 1
    if (nextQ < questions.length) {
      setCurrentQ(nextQ)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "50px auto", textAlign: "center" }}>
      <h1>Career Path Quiz</h1>

      {!career && (
        <div>
          <h2>Select a Career</h2>
          <select onChange={handleCareerSelect} defaultValue="">
            <option value="" disabled>-- Choose --</option>
            <option value="engineer">Engineer</option>
            <option value="lawyer">Lawyer</option>
            <option value="army">Army Officer</option>
          </select>
        </div>
      )}

      {career && !showScore && questions.length > 0 && (
        <div>
          <h2>{questions[currentQ].question}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            {questions[currentQ].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt.isCorrect)} style={{ padding: "10px" }}>
                {opt.answer}
              </button>
            ))}
          </div>
        </div>
      )}

      {showScore && (
        <div>
          <h2>You scored {score} out of {questions.length}</h2>
          <button onClick={() => setCareer("")}>Play Again</button>
        </div>
      )}
    </div>
  )
}
