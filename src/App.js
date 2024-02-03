import { useState } from 'react';
import './App.css';
import { getResponse } from './chatgpt/ChatgptConfig';

// CURRENTLY ALL TEST FUNCTIONS
function App() {

  const [text, setText] = useState('Hi');

  async function changeText() {
    const cpytext = await getResponse();
    setText(cpytext)
  }

  return (
    <div>
      <header>
        <p>
          {text}
        </p>
      </header>
      <button onClick={() => changeText()}>
      What are the colors of the rainbow?
      </button>
    </div>
  );
}

export default App;
