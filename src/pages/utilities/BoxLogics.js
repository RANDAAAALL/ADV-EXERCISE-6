import React, { useState } from "react";

export const useBoxLogics = () => {
    const [Boxes, setBoxes] = useState(Array(10).fill(""));
    const [Input, setInput] = useState("");

    return { Boxes, setBoxes, Input, setInput};
}

export const handleInput = (e, setInput) => setInput(e.target.value);

export const handlePush = (Input, setInput, Boxes, setBoxes) => {
    if (Input.trim() === "") {
      alert("Invalid! it must have an input!");
      return;
    }

    if (Boxes.every(box => box !== "")) {
      alert("Boxes are currently full at the moment!");
      setInput("");
      return;
    }

    for (let i = Boxes.length - 1; i >= 0; i--) {
      if (Boxes[i] === "") {
        setBoxes((prevBoxes) => {
          const newBoxes = [...prevBoxes];
          console.log("New Added: " + Input);
          newBoxes[i] = Input;
          return newBoxes;
        });
        break;
      }
    }
    setInput("");
  };

export const handlePop = (Boxes, setBoxes) => {
    if (Boxes.every(box => box === "")) {
      alert("No boxes to pop!");
      return;
    }

    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      for (let i = 0; i < Boxes.length; i++) {
        if (newBoxes[i] !== "") {
          console.log(i + ": " + newBoxes[i] + " was removed from the box");
          newBoxes[i] = "";
          return newBoxes;
        }
      }
      return newBoxes;
    });
  };

const BoxLogics = () => {
  return (
    <div>Hi</div>
  )
}

export default BoxLogics;

