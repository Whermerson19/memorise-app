import React, { useContext, createContext, useState } from "react";

interface AuthContextData {}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Invalid context");

  return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setDate] = useState(() => {});

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
