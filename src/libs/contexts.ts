import { createContext } from "react";

// global AccessContext for useAccess
export const AccessContext = createContext(null);
export const AccessProvider = AccessContext.Provider;

