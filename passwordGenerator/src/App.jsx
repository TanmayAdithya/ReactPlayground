import { useState } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numbersIncluded, setNumbersIncluded] = useState(false);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    // logic
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-1g px-4 py-3 my-8 bg-secondary text-accent">
        <h1 className="text-accent text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-tertiary text-accent px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersIncluded}
            onChange={() => {
              setNumbersIncluded((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={symbolsIncluded}
            onChange={() => {
              setSymbolsIncluded((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
};

export default App;
