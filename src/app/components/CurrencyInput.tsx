import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ label, value, onChange }) => (
  <div className="my-4">
    <label className="block mb-1">{label}</label>
    <input
      className="p-2 w-full border border-gray-300 rounded"
      type="number"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  </div>
);

export default CurrencyInput;
