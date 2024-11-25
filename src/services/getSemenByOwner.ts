import { api } from "./api";

export interface SemenType {
    quantidade: number;

};

export default async function getSemenByOwner(idOwner: number): Promise<SemenType[] | null> {

    try {
        const response = await api.get(`/embriao/proprietario/${idOwner}`);

        const responseString = response.data.toString();
        const jsonStartIndex = responseString.indexOf('{');

        if(jsonStartIndex !== -1){
            const jsonData: EmbriaoType[] = JSON.parse(responseString.slice(jsonStartIndex - 1));
            return jsonData;
        }else{
            console.log("Dados JSON de animais não encontrados na resposta.");
            return [];
        }

    } catch (error) {
        return null;
    }
}






