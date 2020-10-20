export interface IQuizData {
  id: number
  inputName: string
  question: string
  options: Array<string>
}

export const quizData: IQuizData[] = [
  {
    id: 0,
    inputName: "gen",
    question: "Խնդրում ենք նշել Ձեր սեռը։",
    options: ["Արական", "Իգական", "Ձեզ ինչ"],
  },
  {
    id: 1,
    inputName: "old",
    question: "Խնդրում ենք նշել Ձեր տարիքը։",
    options: ["15-25 տ․", "26-35 տ․", "36-45 տ․", "45+ տ․"],
  },
  {
    id: 2,
    inputName: "car",
    question: "Ունե՞ք մեքենա։",
    options: ["Այո", "Ոչ", "Բա չըլներ"],
  },
  {
    id: 3,
    inputName: "cigarettes",
    question: "Ծխախոտ օգտագործու՞մ եք։",
    options: ["Այո", "Ոչ"],
  },
  {
    id: 4,
    inputName: "sport",
    question: "Սպորտով զբաղվում ե՞ք։",
    options: ["Այո", "Ոչ", "Որ մի լավ բան նվիրեք կզբաղվեմ"],
  },
  {
    id: 5,
    inputName: "comment",
    question: "Ունե՞ք այլ մեկնաբանություններ։",
    options: ["Հավելյալ նշումներ"],
  },
]
export interface IQuizSelectionItem {
  quizId: number;
  selection: number | null;
}

export const quizSelection: IQuizSelectionItem[] = [
  {
    quizId: 1,
    selection: null,
  },
  {
    quizId: 2,
    selection: null,
  },
  {
    quizId: 3,
    selection: null,
  },
  {
    quizId: 4,
    selection: null,
  },
  {
    quizId: 5,
    selection: null,
  },
  {
    quizId: 6,
    selection: null,
  },
];