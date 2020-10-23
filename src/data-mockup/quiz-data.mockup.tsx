export interface IQuizData {
  id: number;
  inputName: string;
  question: string;
  options: Array<string>;
  selection: number | string | null;
}

export const quizData: IQuizData[] = [
  {
    id: 1,
    inputName: "gen",
    question: "Խնդրում ենք նշել Ձեր սեռը։",
    options: ["Արական", "Իգական", "Ձեզ ինչ 🤔"],
    selection: null,
  },
  {
    id: 2,
    inputName: "old",
    question: "Խնդրում ենք նշել Ձեր տարիքը։",
    options: [],
    selection: null,
  },
  {
    id: 3,
    inputName: "car",
    question: "Ունե՞ք մեքենա։",
    options: ["Այո", "Ոչ", "Բա չըլներ 🙄"],
    selection: null,
  },
  {
    id: 4,
    inputName: "cigarettes",
    question: "Ծխախոտ օգտագործու՞մ եք։",
    options: ["Այո", "Ոչ"],
    selection: null,
  },
  {
    id: 5,
    inputName: "sport",
    question: "Սպորտով զբաղվում ե՞ք։",
    options: ["Այո", "Ոչ", "Որ մի լավ բան նվիրեք կզբաղվեմ  😜"],
    selection: null,
  },
  {
    id: 6,
    inputName: "comment",
    question: "Ունե՞ք այլ մեկնաբանություններ։",
    options: ["Հավելյալ նշումներ"],
    selection: null,
  },
];