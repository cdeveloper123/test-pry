import React, { useState } from 'react';
import useStore from '../store/useStore';

const AddInputDropdown = () => {
  const [show, setShow] = useState(false);
  const addInput = useStore((state) => state.addInput);

  const handleAddInput = (type: any) => {
    addInput(type);
    setShow(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-gray-200 border border-gray-300 p-2 rounded cursor-pointer text-lg"
        onClick={() => setShow(!show)}
      >
        +
      </button>
      {show && (
        <div className="absolute bg-white border border-gray-300 shadow-md min-w-40 z-10">
          <a
            className="block px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => handleAddInput('Number')}
          >
            Number
          </a>
          <a
            className="block px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => handleAddInput('Percentage')}
          >
            Percentage
          </a>
         
        </div>
      )}
    </div>
  );
};

export default AddInputDropdown;
