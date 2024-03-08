function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui mb-4 ml-2 mr-6 p-0 sm:mr-0 "
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui mb-4 ml-4 mr-6 p-0 sm:mr-0"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
}

export default NextButton;
