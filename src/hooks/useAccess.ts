import { useContext } from "react";
import { AccessContext as _AccessContext } from "../libs/contexts";

// get global context
const useAccess = () => {
  const AccessContext = useContext(_AccessContext);
  const access = AccessContext;
  return access;
};

export default useAccess;
