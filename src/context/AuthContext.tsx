import { createContext, ReactNode, useState } from "react";

import { UserType } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserType;
  setUser: (user: UserType) => void;
}

type AuthContextProviderProps = {
  children: ReactNode
}
export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    CNPJ: 12312312345,
    DDD: 34,
    email: 'gluceploiu@gmail.com',
    razao_social: 'Gabriel',
    telefone: 123456789

  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}