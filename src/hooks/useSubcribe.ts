import { useState } from "react";

let _Initial = true;
let _preState = {};

// compare two variables if same.
// they will be compared by Object.is when both of whose type are function or symbol.
const deepEqual = (p: any, q: any): boolean => {
  if (p === null || q === null) return false;
  const _type = typeof p;
  if (typeof p !== typeof q) {
    return false;
  }
  if (_type === "function" || _type === "symbol") {
    if (!Object.is(p, q)) {
      return false;
    }
  }
  if (
    _type === "undefined" ||
    _type === "bigint" ||
    _type === "boolean" ||
    _type === "number" ||
    _type === "string"
  ) {
    if (p !== q) {
      return false;
    }
  }
  if (_type === "object") {
    // compare twice as logical set.
    for (const k in p) {
      if (!deepEqual(p[k], q[k])) {
        return false;
      }
    }
    for (const k in q) {
      if (!deepEqual(q[k], p[k])) {
        return false;
      }
    }
  }
  return true;
};

const useSubcribe = (fetcher: CallableFunction, ms: number = 1000*60) => {
  if (!fetcher || typeof fetcher !== "function") {
    throw new Error("useSubcribe must has the callablefuction fetcher.");
  }
  if (ms && typeof ms !== "number") {
    throw new Error("useSubcribe second parameter ms must be type of number.");
  }
  const [state, setState] = useState({});
  // first setup the datas through the fetcher function
  if (_Initial) {
    fetcher()
      .then((_responseData: any) => setState(_responseData))
      .catch((error: Error) => console.error("fetcher error occured:\n", error));
    _Initial = false;
    _preState = state;

    // regist a clock to refetch the data
    setInterval(async () => {
      fetcher()
        .then((_state: any) => {
          if (!deepEqual(_preState, _state)) {
            // if not same then refetch it.
            _preState = _state;
            setState(_state);
          }
        })
        .catch((error: Error) =>
          console.error("fetcher error occured:\n", error)
        );
    }, ms);
  }
  return state;
};

export default useSubcribe;
