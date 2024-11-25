import { api, configureApi} from "./api";

export interface OwnerType {
    id_proprietario: number;
    razao_social: string;
    CNPJ: string;
    email: string;
    numero_telefone: number;
    DDD: number;
};

export default async function getOwners(ip: string): Promise<OwnerType[] | null> {
    configureApi(ip)
    try {
        const response = await api.get('/proprietario');

        const dataString = response.data.toString();
        const jsonStartIndex = dataString.indexOf('[');

        if (jsonStartIndex !== -1) {
            const jsonData: OwnerType[] = JSON.parse(dataString.slice(jsonStartIndex));
            return jsonData;
        } else {
            console.error("Dados JSON de proprietários não encontrados na resposta.");
            return [];
        }
    } catch (error) {
        return null;
    }
}






