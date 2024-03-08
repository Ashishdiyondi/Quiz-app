// import Options from "./Options";

import Options from './Options';

function Question({ displayQuestions, question, dispatch, answer }) {
  return (
    <div className="ml-32  w-4/5 sm:ml-0 sm:w-full">
      <h4>{question.question}</h4>
      <Options
        displayQuestions={displayQuestions}
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Question;
