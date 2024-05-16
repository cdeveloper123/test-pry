interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange }) => (
  <div className=' m-[10px]'>
    <label>{label}</label>
    <input
      className='p-[5px] w-full border-2'
      type="number"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  </div >
);

export default NumberInput;
