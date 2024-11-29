import { api } from "./api";

export type RacaType = {
    cod_raca: string;
    descricao: string;
};


export default async function getRacas(): Promise<RacaType[] | undefined> {
    try {
        const response = await api.get('/raca');

        const dataString = response.data.toString();
        const jsonStartIndex = dataString.indexOf('[');

        if (jsonStartIndex !== -1) {
            const jsonData: RacaType[] = JSON.parse(dataString.slice(jsonStartIndex));

            return jsonData;
        } else {
            console.error("Dados JSON de racas não encontrados na resposta.");
            return [];
        }
    } catch (error) {
        console.log('Erro requisição raças: ', error);
        return undefined;
    }
}






