import React from '/public/logo512.png';
import css from '/public/css.png';
import html from '/public/html.png';
import Javascript from '/public/javascript.png';
function Topics({ dispatch }) {
  return (
    <div className="form-group topic mb-2 py-6 ">
      <label className="form-label grid-label start">
        <p className="mb-5 text-3xl font-semibold">Choose topic :</p>
      </label>
      <div className="form-group-inline-grid mt-5">
        <label className="btn1 btn-ui grid-option-easy">
          <input
            type="radio"
            name="level"
            className="radio-btn"
            value="Html"
            // checked={level === LEVELS.EASY}
            onChange={(e) =>
              dispatch({ type: 'topic', payload: e.target.value })
            }
          />
          {/* Html */}
          <img src={html} alt="Html logo" className="size-16" />
        </label>
        <label className="btn1 btn-ui grid-option-medium">
          <input
            type="radio"
            name="level"
            className="radio-btn"
            value="Css"
            // checked={level === LEVELS.MEDIUM}
            onChange={(e) =>
              dispatch({ type: 'topic', payload: e.target.value })
            }
          />
          {/* Css */}
          <img src={css} alt="Css logo" className="size-16" />
        </label>
        <label className="btn1 btn-ui grid-option-hard">
          <input
            type="radio"
            name="level"
            className="radio-btn"
            value="Js"
            // checked={level === LEVELS.HARD}
            onChange={(e) =>
              dispatch({ type: 'topic', payload: e.target.value })
            }
          />
          {/* Js */}
          <img src={Javascript} alt="javascript logo" className="size-16" />
        </label>
        <label className="btn1 btn-ui grid-option-all">
          <input
            type="radio"
            name="level"
            className="radio-btn"
            value="React"
            // checked={level === LEVELS.ALL}
            onChange={(e) =>
              dispatch({ type: 'topic', payload: e.target.value })
            }
          />
          {/* React */}
          <img src={React} alt="React logo" className="size-16" />
        </label>
      </div>
    </div>
  );
}

export default Topics;
