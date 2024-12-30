import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="flex justify-center items-end p-20 w-full h-screen"
      style={{backgroundColor: color}}>
        <div className="rounded-xl bg-white flex gap-2 px-20 py-3">
          <button onClick={() => {setColor('red')}} className="bg-red-600 text-white px-3 rounded-xl hover:bg-red-700 transition-all" >Red</button>
          <button onClick={() => {setColor('blue')}} className="bg-blue-600 text-white px-3 rounded-xl hover:bg-blue-700 transition-all">Blue</button>
          <button onClick={() => {setColor('green')}} className="bg-green-600 text-white px-3 rounded-xl hover:bg-green-700 transition-all">Green</button>
          <button onClick={() => {setColor('yellow')}} className="bg-yellow-600 text-white px-3 rounded-xl hover:bg-yellow-700 transition-all">Yellow</button>
          <button onClick={() => {setColor('gray')}} className="bg-gray-600 text-white px-3 rounded-xl hover:bg-gray-700 transition-all">Gray</button>
          <button onClick={() => {setColor('pink')}} className="bg-pink-600 text-white px-3 rounded-xl hover:bg-pink-700 transition-all">Pink</button>
          <button onClick={() => {setColor('black')}} className="bg-black text-white px-3 rounded-xl hover:bg-black transition-all">Black</button>
        </div>
      </div>
    </>
  );
}

export default App;
