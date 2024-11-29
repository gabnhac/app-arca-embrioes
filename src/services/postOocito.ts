import { api } from "./api";

type OocitoPost = {
    quantidade: number;
    id_animal: number;

}

export default async function postOocito(
    {
        quantidade,
        id_animal
    }: OocitoPost) {
    try {
        const response = await api.post('/materialdoadora', {
            quantidade: quantidade,
            id_animal: id_animal
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}