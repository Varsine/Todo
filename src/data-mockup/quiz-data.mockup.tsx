export interface IQuizData {
  id: number
  inputName: string
  question: string
  note: string
  options: Array<string>
};

export const quizData: IQuizData[] = [
  {
    id: 1,
    inputName: "gen",
    question: "Խնդրում ենք նշել Ձեր սեռը։",
    options: ["Արական", "Իգական", "Ձեզ ինչ"],
    note: "",
  },
  {
    id: 2,
    inputName: "old",
    question: "Խնդրում ենք նշել Ձեր տարիքը։",
    options: ["15-25 տ․", "26-35 տ․", "36-45 տ․", "45+ տ․"],
    note: "",
  },
  {
    id: 3,
    inputName: "car",
    question: "Ունե՞ք մեքենա։",
    options: ["Այո", "Ոչ", "Բա չըլներ"],
    note: "",
  },
  {
    id: 4,
    inputName: "cigarettes",
    question: "Ծխախոտ օգտագործու՞մ եք։",
    options: ["Այո", "Ոչ"],
    note: "",
  },
  {
    id: 5,
    inputName: "sport",
    question: "Սպորտով զբաղվում ե՞ք։",
    options: ["Այո", "Ոչ", "Որ մի լավ բան նվիրեք կզբաղվեմ"],
    note: "",
  },
  {
    id: 6,
    inputName: "comment",
    question: "Ունե՞ք այլ մեկնաբանություններ։",
    options: [],
    note: "Հավելյալ նշումներ",
  },
];