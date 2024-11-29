import { api } from "./api";

export type EmbriaoType = {
    cod_embriao: number;
    id_macho: string;
    id_femea: string;
    data_fecundacao: Date;
    data_congelamento: Date;
    data_descongelamento: Date;
};

export default async function getEmbrioesByOwner(idOwner: number): Promise<EmbriaoType[] | undefined> {
    try {
        const response = await api.get(`/embriao/proprietario/${idOwner}`);

        const responseString = response.data.toString();
        const jsonStartIndex = responseString.indexOf('{');

        if(jsonStartIndex !== -1){
            const jsonData: EmbriaoType[] = JSON.parse(responseString.slice(jsonStartIndex - 1));
            return jsonData;
        }else{
            console.log("Dados JSON de animais não encontrados na resposta. (getEmbrioesByOwner)");
            return [];
        }

    } catch (error) {
        return undefined;
    }
}






