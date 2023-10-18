'use client';

import { createContext, ReactNode, useState, useContext } from 'react';

export const counterContext = createContext<CounterContext>(undefined);

type Props = {
  children: ReactNode;
};

type CounterContext = {
  counter: number;
  increase: () => void;
  decrease: () => void;
};

export const CounterProvider = (props: Props) => {
  const [counter, setCounter] = useState<number>(0);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };

  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  const values = {
    counter,
    increase,
    decrease,
  };

  return (
    <counterContext.Provider value={values}>
      {props.children}
    </counterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(counterContext);
};
