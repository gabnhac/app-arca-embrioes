import { api } from "./api";

type EmbriaoPost = {
    id_macho: number;
    id_femea: number;
    data_fecundacao: Date;
    data_congelamento: Date;
    data_descongelamento: Date | null;
}

export default async function postEmbriao(
    {
        data_congelamento,
        data_descongelamento,
        data_fecundacao,
        id_femea,
        id_macho
    }: EmbriaoPost) {
    try {
        const response = await api.post('/embriao', {
            id_macho: id_macho,
            id_femea: id_femea,
            data_fecundacao: data_fecundacao,
            data_congelamento: data_congelamento,
            data_descongelamento: data_descongelamento
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}