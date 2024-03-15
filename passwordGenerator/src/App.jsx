import { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numbersIncluded, setNumbersIncluded] = useState(false);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);
  const [password, setPassword] = useState('');

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numbersIncluded) str += '0123456789';
    if (symbolsIncluded) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbersIncluded, symbolsIncluded]);

  useEffect(() => generatePassword, [length, numbersIncluded, symbolsIncluded]);

  const copyTextToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-1g px-4 py-3 my-8 bg-secondary text-accent">
        <h1 className="text-accent text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-primary"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            className="outline-none bg-tertiary text-accent px-3 py-0.5 shrink-0"
            onClick={copyTextToClipboard}
          >
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
