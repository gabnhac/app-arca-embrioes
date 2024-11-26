import { api } from "./api";

type OwnerPost = {
    razao_social: string;
    cnpj: string;
    email: string;
    telefone: number;
    ddd: number;
    senha: string;
}

export default async function postOwner(
    {
        cnpj,
        ddd,
        email,
        razao_social,
        senha,
        telefone
    }: OwnerPost) {
    try {
        const response = await api.post('/proprietario', {
            razao_social: razao_social,
            CNPJ: cnpj,
            email: email,
            numero_telefone: telefone,
            DDD: ddd,
            senha: senha,
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}