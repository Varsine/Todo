import React, { useState, createContext, useEffect } from "react"

import Routes from "Routes"
import Layout from "components/Layout/Layout"
import Header from "containers/Header/Header"
import { quizSelection as selectionMockup } from "data-mockup/quiz-data.mockup"

export const QuizContext = createContext({selectionMockup: })

const App = () => {
  const [quizSelection, setQuizSelection] = useState(selectionMockup)

  const selectQuiz = (quizId: number, selection: number) => {
    const copy = [...quizSelection]
    const quizElement = copy.find((el) => el.quizId === quizId)
    if(quizElement) {
      quizElement.selection = selection;
      setQuizSelection(copy);
    } 
  }

  return (
    <div>
      <QuizContext.Provider value={{quizSelection, selectQuiz}}>
        <Header />
        <Layout>
          <Routes />
        </Layout>
      </QuizContext.Provider>
    </div>
  )
}

export default App
