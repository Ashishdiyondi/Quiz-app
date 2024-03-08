function FilterQuestion({ dispatch }) {
  return (
    <div className=" start ">
      <p className="mt-12 mb-5 text-3xl font-semibold ">Choose difficulty :</p>
      <select
        className="btn"
        style={{ marginInline: 'auto', marginBottom: '2rem' }}
        onChange={(e) =>
          dispatch({ type: 'filterQuestions', payload: e.target.value })
        }
      >
        <option value="">Select difficulty</option>
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
}

export default FilterQuestion;
