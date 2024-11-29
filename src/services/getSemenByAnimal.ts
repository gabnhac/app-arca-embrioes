import { api } from "./api";

export interface SemenType {
    IdMaterial: number;
    Quantidade: number;
    id_animal: number;
};

export default async function getSemenByAnimal(idAnimal: string[]): Promise<SemenType[] | undefined> {
    try {
        const promises = idAnimal.map(id => api.get(`/doador/${id}`).then(response => {
            if (response.data) {
                const responseString = response.data.toString();
                const jsonStartIndex = responseString.indexOf('{');
                if (jsonStartIndex !== -1) {

                    return JSON.parse(responseString.slice(jsonStartIndex - 1));
                }
            }
            return []; 
        }));

        const results = await Promise.all(promises);

        const jsonData = results.flat();
        return jsonData;

    } catch (error) {
        console.error('Erro na requisição:', error);
        return undefined;
    }
}
