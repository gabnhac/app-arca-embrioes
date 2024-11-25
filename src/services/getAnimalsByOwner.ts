import {api, configureApi} from "./api";

export interface AnimalType {
    id_animal: number;
    brinco: string;
    nome: string;
    peso: number;
    sexo: string;
    cod_raca: number;
}

export default async function getAnimalsByOwner(id: number, ip: string): Promise<AnimalType[] | undefined> {
    configureApi(ip);
    try {
        const response = await api.get(`/animal/proprietario/${id}`);
        
        const responseString = response.data.toString();
        const jsonStartIndex = responseString.indexOf('{');

        if(jsonStartIndex !== -1){
            const jsonData: AnimalType[] = JSON.parse(responseString.slice(jsonStartIndex - 1));
            return jsonData;
        }else{
            console.log("Dados JSON de animais não encontrados na resposta.");
            return [];
        }
    
    } catch (error) {
        return undefined;
    }
}