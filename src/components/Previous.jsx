function Previous({ dispatch, index }) {
  if (index > 0)
    return (
      <button
        className={`btn btn-ui mb-6 mr-24 sm:mr-0 `}
        // disabled={answer === null}
        onClick={() => dispatch({ type: 'previousQuestion' })}
      >
        Previous
      </button>
    );
}

export default Previous;
