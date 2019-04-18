import React, { useState } from 'react';


function ToolBar(props) {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    const id = Math.floor(Math.random() * Math.floor(100));
    const note = {
      title: userInput,
      content: '',
      x: 0,
      y: 0,
      zIndex: 100,
    };

    props.onSubmit(id, note);
    setUserInput('');
    e.preventDefault();
  };

  return (
    <div id="tool-bar">
      <h1>react-notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={userInput}
          placeholder="enter a title"
        />
        <input type="submit" value="new note" />
      </form>
    </div>
  );
}

export default ToolBar;
