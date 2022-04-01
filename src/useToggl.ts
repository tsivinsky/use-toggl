import { useState } from "react";

/**
 * @param {[unknown, unknown]} `[firstValue, secondValue]`
 *
 * @returns {[unknown, boolean, boolean, () => void]} - Array of current value, 2 boolean values (isFirstValue & isSecondValue) and a function to toggle between 2 values
 */
export const useToggl = <T = unknown>([firstValue, secondValue]: [T, T]): [
  T,
  boolean,
  boolean,
  () => void
] => {
  const [state, setState] = useState(firstValue);

  const toggle = () => {
    if (state === firstValue) {
      setState(secondValue);
    } else {
      setState(firstValue);
    }
  };

  const isFirstValue = state === firstValue;
  const isSecondValue = state === secondValue;

  const value = isFirstValue ? firstValue : secondValue;

  return [value, isFirstValue, isSecondValue, toggle];
};
