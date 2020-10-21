import React, { createContext, useEffect, useState } from "react";

import Routes from "Routes";
import Layout from "components/Layout/Layout";
import Header from "containers/Header/Header";
import { quizData as selectionMockup } from "data-mockup/quiz-data.mockup";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const DeviceContext = createContext<DeviceType>('desktop');

export const QuizContext = createContext({
  quizSelection: selectionMockup,
  selectQuiz: (q: number, s: number) => { }
});

const App = () => {
  const [quizSelection, setQuizSelection] = useState(selectionMockup);
  const [device, setDevice] = useState<DeviceType>(checkDeviceSize());

  const selectQuiz = (quizId: number, selection: number) => {
    const copy = [...quizSelection]
    const quizElement = copy.find((el) => el.id === quizId)
    if (quizElement) {
      quizElement.selection = selection;
      setQuizSelection(copy);
    }
  };

  function checkDeviceSize() {
    const width = window.innerWidth;
    if (width > 1024) {
      return 'desktop';
    } else if (width > 768 && width <= 1024) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setDevice(checkDeviceSize());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <DeviceContext.Provider value={device}>
      <div>
        <QuizContext.Provider value={{ quizSelection, selectQuiz }}>
          <Header />
          <Layout>
            <Routes />
          </Layout>
        </QuizContext.Provider>
      </div>
    </DeviceContext.Provider>
  )
};

export default App;