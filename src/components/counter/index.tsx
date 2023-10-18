'use client';

import { useCounter } from '#contexts/counter';
import CounterDisplay from './display';

const Counter = () => {
  const { increase, decrease } = useCounter();
  return (
    <div>
      <CounterDisplay />
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default Counter;
