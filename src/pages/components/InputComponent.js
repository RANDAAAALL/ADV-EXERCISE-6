import React from "react";
import {useBoxLogics, handlePush, handlePop, handleInput } from '@/pages/utilities/BoxLogics'

const InputComponent = () => {
    const { Boxes, setBoxes, Input, setInput } = useBoxLogics();
  
    return (
        <div className='container flex flex-col text-center items-center sm:mt-4'>
        <div className='input-btns items-center flex xs:flex-col sm:flex-row sm:space-x-4 mt-12'>
            <input
              value={Input}
              onChange={(e) => handleInput(e, setInput)}
              placeholder="Push a value"
              required
              className="border-2 border-zinc-50 text-white px-3 py-2 w-56"
            />
            <div className="btns flex xs:space-x-8 sm:space-x-4 xs:mt-4 sm:mt-0">
              <button
                onClick={() =>
                  handlePush(Input, setInput, Boxes, setBoxes)
                }
                className="text-white border-2 border-zinc-50 py-2 rounded-xl w-24 hover:bg-zinc-700 transition duration-200 ease"
              >
                Push
              </button>
              <button
                onClick={() => handlePop(Boxes, setBoxes)}
                className="text-white border-2 border-zinc-50 py-2 rounded-xl w-24 hover:bg-zinc-700 transition duration-200 ease-in"
              >
                Pop
              </button>
            </div>
          </div>
          <div className="box-container mt-12 flex flex-col items-center">
            {Boxes.map((box, i) => (
              <div
                key={i}
                className="flex items-center justify-center border-2 border-zinc-50 h-10 w-52 text-white"
              >
                {box}
              </div>
            ))}
          </div>
      
          <footer className="xs:mt-12 sm:mt-20">
            <span className="text-gray-400 text-xs">
              Lester Andig © 2024 All Rights Reserved
            </span>
          </footer>
        </div>
      );      
  }
  export default InputComponent;
  