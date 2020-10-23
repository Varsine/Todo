import React, { createContext, useEffect, useState } from "react";

import Routes from "Routes";
import Layout from "components/Layout/Layout";
import Header from "containers/Header/Header";
import { quizData as DataMockup } from "data-mockup/quiz-data.mockup";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const DeviceContext = createContext<DeviceType>('desktop');

export const QuizContext = createContext({
  quizData: DataMockup,
  selectQuiz: (q: number, s: number | string) => { }
});

const App = () => {
  const [quizData, setQuizData] = useState(DataMockup);
  const [device, setDevice] = useState<DeviceType>(checkDeviceSize());

  const selectQuiz = (quizId: number, selection: number | string) => {
    const copy = [...quizData]
    const quizElement = copy.find((el) => el.id === quizId)
    if (quizElement) {
      quizElement.selection = selection;
      setQuizData(copy);
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
        <QuizContext.Provider value={{ quizData, selectQuiz }}>
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