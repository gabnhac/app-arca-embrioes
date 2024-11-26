import { api } from "./api";

export interface SemenType {
    IdMaterial: number;
    Quantidade: number;
    id_animal: number;
};

export default async function getSemenByAnimal(idAnimal: string[]): Promise<SemenType[] | undefined> {
    let jsonData: SemenType[] = [];
    try {
        for (const id of idAnimal) {
            const response = await api.get(`/doador/${id}`);

            if (response.data) {
                const responseString = response.data.toString();
                const jsonStartIndex = responseString.indexOf('{');

                if (jsonStartIndex !== -1) {
                    jsonData = [...JSON.parse(responseString.slice(jsonStartIndex - 1))];
                }
            }


        }
        return jsonData;

    } catch (error) {
        return undefined;
    }
}






