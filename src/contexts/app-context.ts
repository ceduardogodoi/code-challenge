import { createContext } from "react";
import { AppContextType } from "./app-context.types";

export const AppContext = createContext<AppContextType | null>(null);
