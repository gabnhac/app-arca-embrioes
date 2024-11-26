import { api } from "./api";

type SemenPost = {
    quantidade: number;
    id_animal: number;

}

export default async function postSemen(
    {
        quantidade,
        id_animal
    }: SemenPost) {
    try {
        const response = await api.post('/materialdoador', {
            quantidade: quantidade,
            id_animal: id_animal
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}