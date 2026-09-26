"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ExerciseDataType } from "../type/type";

interface stateObjType {
  todaysPlan: ExerciseDataType[];
  setTodaysPlan: Dispatch<
    SetStateAction<ExerciseDataType[]>
  >;
  savedData: ExerciseDataType[];
  setSavedData: Dispatch<
    SetStateAction<ExerciseDataType[]>
  >;
}

export const ThemeContext =
  createContext<stateObjType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
  const [todaysPlan, setTodaysPlan] = useState<
    ExerciseDataType[]
  >([]);
  const [savedData, setSavedData] = useState<
    ExerciseDataType[]
  >([]);

  const stateObj = {
    todaysPlan,
    setTodaysPlan,
    savedData,
    setSavedData,
  };

  return (
    <ThemeContext.Provider value={stateObj}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
