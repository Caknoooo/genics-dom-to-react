import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  // Fungsi untuk menambahkan karakter ke input
  const appendToInput = (character) => {
    setInput((prevInput) => prevInput + character);
  };

  // Fungsi untuk menghitung hasil
  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Fungsi untuk menghapus input
  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3 text-center">Simple Calculator</h1>
      <div className="calculator-container bg-gray-400 p-4 rounded">
        <input
          type="text"
          className="w-full mb-3 p-2 border"
          value={input}
          disabled
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('7')}
          >
            7
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('8')}
          >
            8
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('9')}
          >
            9
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('+')}
          >
            +
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('4')}
          >
            4
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('5')}
          >
            5
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('6')}
          >
            6
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('-')}
          >
            -
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('1')}
          >
            1
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('2')}
          >
            2
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('3')}
          >
            3
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('*')}
          >
            *
          </button>
          <button
            className="col-span-2 bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('0')}
          >
            0
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('.')}
          >
            .
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={calculateResult}
          >
            =
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => appendToInput('/')}
          >
            /
          </button>
          <button
            className="col-span-4 bg-red-500 text-white p-2 rounded"
            onClick={clearInput}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
