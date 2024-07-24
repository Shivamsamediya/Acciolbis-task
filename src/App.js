import React from "react";
import QuestionPage from "./components/QuestionPage";
import AnswerAnalysis from "./components/AnswerAnalysis";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <QuestionPage />
        <AnswerAnalysis />
      </div>
    </>
  );
}

export default App;
