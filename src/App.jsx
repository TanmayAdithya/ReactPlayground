import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="bg-gray-600 w-full h-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-slate-200 px-1 py-2 fixed bottom-24 rounded-3xl">
        <button
          onClick={() => setColor('red')}
          className="bg-red-300 px-4 py-2 mx-2 rounded-3xl"
        >
          Red
        </button>
        <button
          onClick={() => setColor('green')}
          className="bg-green-300 px-4 py-2 mx-2 rounded-3xl"
        >
          Green
        </button>
        <button
          onClick={() => setColor('blue')}
          className="bg-blue-300 px-4 py-2 mx-2 rounded-3xl"
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
