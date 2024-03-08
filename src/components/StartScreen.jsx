function StartScreen({
  topic,
  filterQuestion,
  numQuestions,
  highscore,
  dispatch,
  children,
}) {
  // const isButtonDisabled = !topic || !filterQuestion;
  const isReadyToStart = topic && filterQuestion;
  // Define a CSS class based on the highscore value
  const highscoreClass = highscore < 1 ? 'text-red-500' : 'text-green-500';
  return (
    <div className="start ml-28 sm:ml-0">
      <h2 className="text-4xl sm:text-5xl">Welcome to The {topic} Quiz!</h2>
      <div className=" mr-3 sm:mr-0 mb-5 rounded-lg bg-gray-600">
        <p className={` px-5 py-4 text-3xl tracking-wide ${highscoreClass}`}>
          Your highscore: {highscore}
        </p>
      </div>
      {/* below line will get to know how many question selected */}
      {/* <h3>{numQuestions} questions to test your React mastery</h3> */}
      {children}
      {!isReadyToStart && (
        <h3 className="text-3xl sm:text-4xl">
          Please select topic and difficulty above.
        </h3>
      )}
      {isReadyToStart && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'start', payload: numQuestions })}
          // disabled={isButtonDisabled}
        >
          Let&apos;s start
        </button>
      )}
    </div>
  );
}

export default StartScreen;
