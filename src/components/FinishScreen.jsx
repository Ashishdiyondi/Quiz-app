function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result ml-32 w-4/5 sm:ml-0 sm:w-full">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore ml-32 w-4/5 sm:ml-0 sm:w-full">
        (Highscore: {highscore} points)
      </p>
      <div className="mb-16 ml-36 mr-12 w-3/4 rounded-lg bg-slate-700  p-6 sm:ml-0">
        <span className="  font-serif text-3xl">
          Designed and Developed by{' '}
        </span>
        <div className="mt-5">
          <span className=" text-3xl italic text-sky-500 underline decoration-sky-500">
            <a
              href="https://www.linkedin.com/in/ashish-diyondi-817510254/"
              target="_blank"
            >
              ASHISH DIYONDI
            </a>
          </span>
        </div>
      </div>
      <button
        className="btn btn-ui mb-4 ml-0 mr-10 p-0 sm:mr-0 "
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
