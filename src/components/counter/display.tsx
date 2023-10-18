import { useCounter } from '#contexts/counter';

const CounterDisplay = () => {
  const { counter } = useCounter();
  return <div>{counter}</div>;
};

export default CounterDisplay;
