import React from "react";
import { useState } from "react";

export default function Calculator() {
  // states, that are responsible for
  // displaying inputs and answer on the screen
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");
  //this function takes inputs and shows it on the "screen"
  const handleDisplay = (e) => {
    //function to not repeat opperators and 0 twice
    setInput((prev) =>
      (prev + e.target.value)
        //2 of the same symbol is not allowed
        .replace("00", "0")
        .replace("..", ".")
        .replace("--", "-")
        .replace("++", "+")
        .replace("**", "*")
        .replace("//", "/")
        //last operator, replaces previous operator
        //divide
        .replace("/*", "*")
        .replace("/+", "+")
        //multiply
        .replace("*/", "/")
        .replace("*+", "+")
        //plus
        .replace("+/", "/")
        .replace("+*", "*")
        //minus
        .replace("-/", "/")
        .replace("-*", "*")
        .replace("-+", "+")
    );

    if (input[input.length - 1] == "=") {
      //display after clicking "="
      if (/[0-9]/.test(e.target.value)) {
        setInput(e.target.value);
      } else {
        setInput(output + e.target.value);
      }
    }
    if (input.includes(".")) {
      console.log("dot already exists");
    }
  };
  // removes everything from the "screen"
  const clear = () => {
    setInput("");
    setOutput("0");
  };
  // removes last number/symbol
  const remove = () => {
    setInput((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
  };
  // calculates the operations
  const calculate = () => {
    setOutput(eval(input));
    setInput((prev) => prev + "=");
  };
  return (
    <div>
      <div className="container">
        <div className="grid">
          <div id="screen">
            <input id="input" value={input} placeholder="0" />
            <h2 id="display">{output}</h2>
          </div>
          <button onClick={clear} className="pad" id="clear">
            AC
          </button>
          <button onClick={remove} className="pad" id="remove">
            C
          </button>
          <button
            onClick={handleDisplay}
            value="+"
            className="pad operators"
            id="add"
          >
            +
          </button>
          <button
            onClick={handleDisplay}
            value="1"
            className="pad num"
            id="one"
          >
            1
          </button>
          <button
            onClick={handleDisplay}
            value="2"
            className="pad num"
            id="two"
          >
            2
          </button>
          <button
            onClick={handleDisplay}
            value="3"
            className="pad num"
            id="three"
          >
            3
          </button>
          <button
            onClick={handleDisplay}
            value="-"
            className="pad operators"
            id="subtract"
          >
            -
          </button>
          <button
            onClick={handleDisplay}
            value="4"
            className="pad num"
            id="four"
          >
            4
          </button>
          <button
            onClick={handleDisplay}
            value="5"
            className="pad num"
            id="five"
          >
            5
          </button>
          <button
            onClick={handleDisplay}
            value="6"
            className="pad num"
            id="six"
          >
            6
          </button>
          <button
            onClick={handleDisplay}
            value="/"
            className="pad operators"
            id="divide"
          >
            /
          </button>
          <button
            onClick={handleDisplay}
            value="7"
            className="pad num"
            id="seven"
          >
            7
          </button>
          <button
            onClick={handleDisplay}
            value="8"
            className="pad num"
            id="eight"
          >
            8
          </button>
          <button
            onClick={handleDisplay}
            value="9"
            className="pad num"
            id="nine"
          >
            9
          </button>
          <button
            onClick={handleDisplay}
            value="*"
            className="pad operators"
            id="multiply"
          >
            x
          </button>
          <button
            onClick={handleDisplay}
            value="0"
            className="pad num"
            id="zero"
          >
            0
          </button>
          <button
            onClick={handleDisplay}
            value="."
            className="pad operators"
            id="decimal"
          >
            .
          </button>
          <button onClick={calculate} className="pad operators" id="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
