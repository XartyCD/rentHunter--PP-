import { createContext, useContext } from "react"

export const AppContext = createContext()

console.log("Auth")

export const AppProvider = ({ children }) => {
  const num = 1
  const value = {num}

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  return useContext(AppContext)
}
