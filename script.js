import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  const handleTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= charLimit) {
      setInputText(text);
    }
  };

  const handleCharLimitChange = (e) => {
    const limit = parseInt(e.target.value, 10);
    setCharLimit(limit);
    if (inputText.length > limit) {
      setInputText(inputText.slice(0, limit));
    }
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const wordCount = inputText.split(/\s+/).filter((word) => word !== '').length;
  const charCount = inputText.length;

  return (
    <div className="App">
      <textarea
        value={inputText}
        onChange={handleTextChange}
        style={{ fontSize: `${fontSize}px` }}
      />

      <div id="word-counter">Word Count: {wordCount}</div>
      <div id="char-counter">Character Count: {charCount}</div>

      <label htmlFor="char-limit-input">Character Limit:</label>
      <input
        type="number"
        id="char-limit-input"
        value={charLimit}
        onChange={handleCharLimitChange}
      />

      <label htmlFor="fontSize-input">Font Size:</label>
      <input
        type="range"
        id="fontSize-input"
        min="16"
        max="32"
        step="1"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
}

export default App;
