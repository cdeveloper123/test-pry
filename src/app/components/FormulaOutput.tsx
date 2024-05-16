'use client';
import styled from 'styled-components';

const OutputWrapper = styled.div`
  margin: 10px 0;
`;

interface FormulaOutputProps {
  label: string;
  value: number;
}

const FormulaOutput: React.FC<FormulaOutputProps> = ({ label, value }) => {
  return (
    <OutputWrapper>
      <label>{label}</label>
      <div>{value}</div>
    </OutputWrapper>
  );
};

export default FormulaOutput;
