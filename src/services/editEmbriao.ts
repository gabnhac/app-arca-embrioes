import { api } from "./api";

type EmbriaoEdit = {
    id_embriao: number;
    data_congelamento: Date;
    data_descongelamento: Date;
}

export default async function editEmbriao(
    {
        data_congelamento,
        data_descongelamento,
        id_embriao
    }: EmbriaoEdit) {
    try {
        const response = await api.post(`/embriao/${id_embriao}`, {
            data_congelamento: data_congelamento,
            data_descongelamento: data_descongelamento
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}