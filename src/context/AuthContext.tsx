import { createContext, ReactNode, useState } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
}

type AuthContextProviderProps = {
  children: ReactNode
}
export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

const dummyDataLogin = {
  emailCheck: 'user@gmail.com',
  passwordCheck: 'user1234'
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);

  function signIn(email: string, password: string){
    const {emailCheck, passwordCheck} = dummyDataLogin;
    if(email === emailCheck && password === passwordCheck){
      setUser({
        id: 1,
        CNPJ: 12345678910123,
        DDD: 34,
        email: 'user@gmail.com',
        razao_social: 'User Farm',
        telefone: 912345678
      })
    }else{
      console.log('Erro ao efetuar login.')
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}