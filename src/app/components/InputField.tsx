'use client';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className=' m-[10px]'>
      <label>{label}</label>
      <input
      className='p-[5px] w-full border-2'
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default InputField;
