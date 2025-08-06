// FiltersContext.js
import React, { createContext, useContext, useState } from 'react';

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    businessType: null,
    subType: null,
    state: null,
    city: null,
  });

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilterByKey = (key) => {
    setFilters((prev) => ({ ...prev, [key]: null }));
  };

  const resetFilters = () => {
    setFilters({
      businessType: null,
      subType: null,
      state: null,
      city: null,
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        updateFilters,
        clearFilterByKey,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
