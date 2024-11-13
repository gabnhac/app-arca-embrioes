import { api } from "./api";

export interface OwnerType {
    id_proprietario: number;
    razao_social: string;
    CNPJ: string;
    email: string;
    numero_telefone: number;
    DDD: number;
};

export default async function getOwners(): Promise<OwnerType[] | []> {
    try {
        const response = await api.get('/proprietario');

        const dataString = response.data.toString();
        const jsonStartIndex = dataString.indexOf('[');

        if (jsonStartIndex !== -1) {
            const jsonData: OwnerType[] = JSON.parse(dataString.slice(jsonStartIndex));
            return jsonData;
        } else {
            console.error("Dados JSON não encontrados na resposta.");
            return [];
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        return [];
    }
}






