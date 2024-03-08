/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from 'react';
import Header from './Header';
import Maine from './Maine';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
import Previous from './Previous';
import FilterQuestion from './FilterQuestion';
import Topics from './Topics';

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  filterQuestion: '',
  // index points current question
  index: 0,

  // answer is updated in Option.jsx by selecting out of 4 options ie,payload
  answer: [],
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  topic: null,
  answerHistory: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        status: 'ready',
        // questions: action.payload,
        questions: action.payload.questions,
        // highscore: action.payload.highscore.highscore,
      };

    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'topic':
      return {
        ...state,
        topic: action.payload,
      };

    case 'filterQuestions':
      return {
        ...state,
        filterQuestion: action.payload,
      };

    case 'start':
      return {
        ...state,
        status: 'active',
        // secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        secondsRemaining: action.payload * SECS_PER_QUESTION,
      };

    case 'newAnswer':
      // const question = state.questions.at(state.index);
      const question = action.payload.displayQuestions.at(state.index);
      return {
        ...state,
        answer: [...state.answer, action.payload.index],
        // answer: action.payload.index,
        points:
          action.payload.index === question.correctOption
            ? state.points + question.points
            : state.points,

        answerHistory: [...state.answerHistory, action.payload.index],
      };

    case 'nextQuestion':
      return { ...state, index: state.index + 1 };

    case 'previousQuestion':
      return {
        ...state,
        index: state.index - 1,
      };

    case 'finish':
      //
      fetch(
        // "https://my-json-server.typicode.com/lence92/10-react-quiz/highscore",
        // 'http://localhost:9000/highscore',
        // "https://my-json-server.typicode.com/AshishDiyondi/question-api/highscore",
        "https://question-api-drgw.onrender.com/highscore",
        {
          method: 'PUT',
          body: JSON.stringify({
            highscore:
              state.points > state.highscore ? state.points : state.highscore,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      //
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case 'restart':
      return {
        ...initialState,
        status: 'ready',
        questions: state.questions,
        highscore: state.highscore,
      };

    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Action unknown');
  }
}

export default function App() {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
      filterQuestion,
      topic,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  let displayQuestions;

  if (topic === 'React' && filterQuestion === 'all')
    displayQuestions = questions.filter(
      (question) => question.topic === 'React',
    );
  else if (topic === 'React' && filterQuestion === 'easy')
    displayQuestions = questions.filter(
      (question) => question.topic === 'React' && question.points === 10,
    );
  else if (topic === 'React' && filterQuestion === 'medium')
    displayQuestions = questions.filter(
      (question) => question.topic === 'React' && question.points === 20,
    );
  else if (topic === 'React' && filterQuestion === 'advanced')
    displayQuestions = questions.filter(
      (question) => question.topic === 'React' && question.points === 30,
    );
  // Js
  else if (topic === 'Js' && filterQuestion === 'all')
    displayQuestions = questions.filter((question) => question.topic === 'Js');
  else if (topic === 'Js' && filterQuestion === 'easy')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Js' && question.points === 10,
    );
  else if (topic === 'Js' && filterQuestion === 'medium')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Js' && question.points === 20,
    );
  else if (topic === 'Js' && filterQuestion === 'advanced')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Js' && question.points === 30,
    );
  // Css
  else if (topic === 'Css' && filterQuestion === 'all')
    displayQuestions = questions.filter((question) => question.topic === 'Css');
  else if (topic === 'Css' && filterQuestion === 'easy')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Css' && question.points === 10,
    );
  else if (topic === 'Css' && filterQuestion === 'medium')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Css' && question.points === 20,
    );
  else if (topic === 'Css' && filterQuestion === 'advanced')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Css' && question.points === 30,
    );
  // Html
  else if (topic === 'Html' && filterQuestion === 'all')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Html',
    );
  else if (topic === 'Html' && filterQuestion === 'easy')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Html' && question.points === 10,
    );
  else if (topic === 'Html' && filterQuestion === 'medium')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Html' && question.points === 20,
    );
  else if (topic === 'Html' && filterQuestion === 'advanced')
    displayQuestions = questions.filter(
      (question) => question.topic === 'Html' && question.points === 30,
    );
  else displayQuestions = questions;

  const numQuestions = displayQuestions.length;
  // console.log(displayQuestions);
  // console.log(numQuestions);
  // index == numQuestions;
  // console.log(index);
  const maxPossiblePoints = displayQuestions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );
  //

  // useEffect(function () {
  //   fetch("http://localhost:9000/questions")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //     .catch((err) => dispatch({ type: "dataFailed" }));
  // }, []);

  //
  useEffect(() => {
    Promise.all([
      fetch(
        // "https://my-json-server.typicode.com/lence92/10-react-quiz/questions"
        // 'http://localhost:9000/questions',
        // "https://my-json-server.typicode.com/AshishDiyondi/question-api/questions",
        "https://question-api-drgw.onrender.com/questions",
      ),
      fetch(
        // "https://my-json-server.typicode.com/lence92/10-react-quiz/highscore"
        // 'http://localhost:9000/highscore',
        // "https://my-json-server.typicode.com/AshishDiyondi/question-api/highscore",
        "https://question-api-drgw.onrender.com/highscore",
      ),
    ])
      .then(([resQuestions, resHighscore]) =>
        Promise.all([resQuestions.json(), resHighscore.json()]),
      )
      .then(([dataQuestions, dataHighscore]) => {
        dispatch({
          type: 'dataReceived',
          payload: { questions: dataQuestions, highscore: dataHighscore },
        });
      })
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  //

  return (
    <div className="app">
      <Header topic={topic} />
      <Maine>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen
            highscore={highscore}
            numQuestions={numQuestions}
            dispatch={dispatch}
            topic={topic}
            filterQuestion={filterQuestion}
          >
            <Topics dispatch={dispatch} />
            <FilterQuestion dispatch={dispatch} />
          </StartScreen>
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer[index] ?? null}
            />

            <Question
              displayQuestions={displayQuestions}
              question={displayQuestions[index]}
              // question={questions[index]}
              dispatch={dispatch}
              answer={answer[index] ?? null}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer[index] ?? null}
                numQuestions={numQuestions}
                index={index}
              />
              <Previous dispatch={dispatch} index={index} />
            </Footer>
          </>
        )}

        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Maine>
    </div>
  );
}
