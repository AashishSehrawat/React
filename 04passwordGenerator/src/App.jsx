import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(7);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [textButton, setTextButton] = useState("Copy");

  const passwordRef = useRef(null);
 
  // In callback, the dependencies is recorded in chache and it used for optimization of code
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    if(number) str += '0123456789';
    if(character) str+= "'!@#$%^&*()'";

    for(let i=0 ; i<length ; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, number, character])

  // in useEffect, when the dependencies change than function inside useEffect call again
  useEffect(()=>{
    passwordGenerator()
  } , [length, character, number, passwordGenerator])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 7)
    window.navigator.clipboard.writeText(password);
    setTextButton("Copied")
    setTimeout(() => {
      setTextButton("Copy")
    }, 1000);
   
  }, [password])

  return (
    <>
      <div className="bg-black w-full h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-white text-4xl">Password Generator</h1>
        <div className="w-2/5 h-1/4 bg-slate-500 rounded-xl p-6 flex flex-col justify-evenly">
          <div className="flex">
            <input
              type="text"
              className="w-full outline-none p-1 rounded-l-md"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
            onClick={copyPassword}
            className="text-white bg-orange-500 px-2 rounded-r-md hover:bg-orange-600 transition-all">
              {textButton}
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <span className="text-white">Length: {length}</span>
              <input
                className="accent-orange-500"
                type="range"
                value={length}
                min="5"
                max="50"
                onChange={(e) => {setLength(e.target.value)}}
              />
            </div>

            <div className="flex gap-1 ">
              <input
                className="cursor-pointer w-4 accent-orange-500"
                type="checkbox"
                defaultChecked={number}
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <span className="text-white">Integer(0-9)</span>
            </div>

            <div className="flex gap-1 ">
              <input
                className="cursor-pointer w-4 accent-orange-500"
                type="checkbox"
                defaultChecked={character}
                onChange={() => {
                  setCharacter((prev) => !prev);
                }}
              />
              <span className="text-white">Character(@,#)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
