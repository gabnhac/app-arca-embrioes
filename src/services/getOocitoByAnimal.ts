import { api } from "./api";

export interface OocitoType {
    IdMaterial: number;
    Quantidade: number;
    id_animal: number;
};

export default async function getOocitoByAnimal(idAnimal: string[]): Promise<OocitoType[] | undefined> {
    let jsonData: OocitoType[] = [];
    try {
        for (const id of idAnimal) {
            const response = await api.get(`/doadora/${id}`);

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






