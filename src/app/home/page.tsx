"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../store/useStore";
import NumberInput from "../components/NumberInput";
import PercentageInput from "../components/PercentageInput";
import CurrencyInput from "../components/CurrencyInput";
import AddInputDropdown from "../components/AddInputDropdown";
import FormulaOutput from "../components/FormulaOutput";

const HomePage = () => {
  const { inputs, updateInput } = useStore();
  const [calcuatedVal, setCalculated] = useState(null);

  const renderInputField = (input: any) => {
    switch (input.type) {
      case "Number":
        return (
          <NumberInput
            key={input.id}
            label={input.label}
            value={input.value}
            onChange={(value) => updateInput(input.id, value)}
          />
        );
      case "Percentage":
        return (
          <PercentageInput
            key={input.id}
            label={input.label}
            value={input.value}
            onChange={(value) => updateInput(input.id, value)}
          />
        );
      // case "Currency":
      //   return (
      //     <CurrencyInput
      //       key={input.id}
      //       label={input.label}
      //       value={input.value}
      //       onChange={(value) => updateInput(input.id, value)}
      //     />
      //   );
      default:
        return null;
    }
  };

  function addToEditableDiv(text: string) {
    const editableDiv = document.getElementById("editableDiv");
    if (editableDiv) {
      editableDiv.innerText += text;
    }
  }

  const calculate = () => {
    const editableDiv = document.getElementById("editableDiv");
    if (editableDiv) {
      const expression = editableDiv.innerText;
      const substitutedExpression = expression.replace(
        /([A-Za-z\s]+)(?=[^\w\s]|$)/g,
        (match: any) => {
          const input = inputs.find((input) => input.label === match.trim());

          if (input?.type == "Percentage") {
            return input.value / 100;
          }
          return input ? input.value : match;
        }
      );
      try {
        const result = eval(`(${substitutedExpression})`);
        setCalculated(result);
      } catch (error) {
        console.error("Error evaluating expression:", error);
      }
    }
  };

  console.log(calcuatedVal);

  return (
    <div className="flex flex-col p-[20px]">
      <span className=" text-2xl font-semibold underline underline-offset-4 py-5">
        Revenue Dashboard
      </span>
      <div className="flex  flex-row justify-between items-start  ">
        <div className="flex flex-col w-[20%]">
          <span className=" text-xl font-semibold underline underline-offset-4 py-5">
            Inputs
          </span>
          {inputs.map((input) => renderInputField(input))}
          <AddInputDropdown />
        </div>
        <div className="w-[80%]">
          <div>
            <h2>Formulas</h2>
            <div>
              <div className=" border-b-0 w-full min-h-[4rem] rounded">
                <div className="border-b w-full bg-gray-400 text-white rounded">
                  Customer
                  <button
                    className=" bg-black text-white test-sm px-2 m-2 rounded"
                    onClick={calculate}
                  >
                    Calculate
                  </button>
                </div>
                <div
                  contentEditable={true}
                  className="h-full w-full border border-t-0 active:outline-none focus:outline-none rounded min-h-10 px-10 py-5"
                  id="editableDiv"
                ></div>
                <div id="result">Output :{calcuatedVal}</div>
              </div>
            </div>
          </div>

          <div className="my-10 mx-5">
            {inputs.map((input) => (
              <button
                className=" bg-blue-300 border-2  px-2 py2 rounded-lg"
                onClick={() => addToEditableDiv(input.label)}
              >
                {input.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
