import create from 'zustand';

interface InputField {
  id: number;
  type: string;
  label: string;
  value: number;
}

interface StoreState {
  inputs: InputField[];
  addInput: (type: string) => void;
  updateInput: (id: number, value: number) => void;
}

const useStore = create<StoreState>((set) => ({
  inputs: [
    { id: 1, type: 'Percentage', label: 'Monthly Churn Rate', value: 5 },
    { id: 2, type: 'Number', label: 'Initial Customer Count', value: 50 },
    { id: 3, type: 'Currency', label: 'Monthly Contract Value', value: 25 },
    { id: 4, type: 'Number', label: 'Monthly New Customers', value: 10 },
  ],
  addInput: (type) => set((state) => {
    const newId = state.inputs.length > 0 ? state.inputs[state.inputs.length - 1].id + 1 : 1;
    const newInput: InputField = { id: newId, type, label: `NewInput`, value: 0 };
    return { inputs: [...state.inputs, newInput] };
  }),
  updateInput: (id, value) => set((state) => ({
    inputs: state.inputs.map((input) => input.id === id ? { ...input, value } : input),
  })),
}));


export default useStore;
