import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
`;

interface PercentageInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const PercentageInput: React.FC<PercentageInputProps> = ({
  label,
  value,
  onChange,
}) => (
  <InputWrapper>
    <Label>{label}</Label>
    <input
      className="p-[5px] w-full border-2"
      type="number"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
    %
  </InputWrapper>
);

export default PercentageInput;
