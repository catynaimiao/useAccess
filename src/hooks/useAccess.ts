import { useContext } from "react";
import { AccessContext as _AccessContext } from "../libs/contexts";

// get global context
const useAccess = (selector: CallableFunction = undefined) => {
  const AccessContext = useContext(_AccessContext);
  const access = AccessContext;

  if (selector !== undefined) {
    if (typeof selector !== "function") {
      throw new Error("selector must be callback function.");
    }
    if (typeof access !== "object") {
      throw new Error(
        "is there any trouble with your AccessProvider, it must parse a object to value."
      );
    }
    const _access = { ...access };
    return selector(_access);
  }

  return access;
};

export default useAccess;
