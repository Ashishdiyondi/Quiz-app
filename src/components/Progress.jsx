function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress  ml-32  w-4/5  sm:ml-0 sm:w-full">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
