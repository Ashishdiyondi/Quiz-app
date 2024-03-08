import quiz from '/public/quiz.png';
import React from '/public/logo512.png';
import css from '/public/css.png';
import html from '/public/html.png';
import Javascript from '/public/javascript.png';
function Header({ topic }) {
  //
  // Define a default image source
  const defaultImageSrc = quiz;
  // Map each topic to its respective logo
  const topicLogos = {
    React: React,
    Html: html,
    Css: css,
    Js: Javascript,
    // Add other topics and their logos here
  };
  // Get the corresponding logo for the selected topic
  const selectedLogo = topic
    ? topicLogos[topic] || defaultImageSrc
    : defaultImageSrc;
  //
  return (
    <header className="app-app-header  ml-24 sm:ml-0 flex flex-col  items-center justify-center px-4  py-6 sm:flex-row sm:justify-between ">
      {/* <img src="logo512.png" alt="React logo" /> */}
      {/* <img src={image} alt="React logo" /> */}
      {/* <h1>The {topic} Quiz</h1> */}
      <img
        src={selectedLogo}
        alt={`${topic} logo`}
        className="mb-1 size-48"
      />
      <h1 className="text-5xl ">
        {topic ? `The ${topic} Quiz` : `The Quiz App`}
      </h1>
    </header>
  );
}

export default Header;
