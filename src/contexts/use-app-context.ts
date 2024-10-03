import { useContext } from "react";
import { AppContext } from "./app-context";

export function useAppContext() {
  const context = useContext(AppContext);

  if (context == null) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
}
