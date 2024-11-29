import { createContext, ReactNode, useState } from "react";

import { LabDTO, UserDTO } from "@dtos/UserDTO";
import { OwnerType } from "@services/getOwners";

type IpAPI = string;
export type AuthContextDataProps = {
  user: UserDTO;
  userLab: LabDTO;
  setUserOwner: (owner: OwnerType) => void;
  signInLab: (email: string, password: string) => void;
  ipAPI: IpAPI;
  setAPI: (ip: string) => void;
}

type AuthContextProviderProps = {
  children: ReactNode
}


export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

const dummyDataLogin = {
  emailCheck: 'user@gmail.com',
  passwordCheck: 'user1234'
}

const dummyDataLoginLab = {
  emailCheckLab: 'lab@gmail.com',
  passwordCheckLab: 'lab12345'
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);
  const [userLab, setUserLab] = useState({} as LabDTO);
  const [ipAPI, setIpAPI] = useState<IpAPI>('0');

  function signInLab(email: string, password: string) {
    const { emailCheckLab, passwordCheckLab } = dummyDataLoginLab;
    if (email === emailCheckLab && password === passwordCheckLab) {
      setUserLab({
        CNPJ: 12345678910123,
        email: 'lab@gmail.com',
      })
    } else {
      console.error('erro ao logar');
    }
  }

  function setUserOwner(owner: OwnerType) {
    setUser({
      id: owner.id_proprietario,
      CNPJ: owner.CNPJ,
      DDD: owner.DDD,
      email: owner.email,
      razao_social: owner.razao_social,
      telefone: owner.numero_telefone
    })
  }

  function setAPI(ip: string) {
    setIpAPI(ip);
  }

  return (
    <AuthContext.Provider value={{ userLab, user, signInLab, setUserOwner, setAPI, ipAPI }}>
      {children}
    </AuthContext.Provider>
  )
}