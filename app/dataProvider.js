"use client";
import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const data = "This is the shared data";
  const [isOpen, setIsOpen] = useState(true);

  return (
    <DataContext.Provider value={{ data, isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
