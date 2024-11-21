import { api } from "./api";

type AnimalPost = {
    nome: string;
    cod_raca: number;
    sexo: string;
    peso: number;
    brinco: string;
    id_proprietario: number;
}

export default async function postAnimal(
    {
        brinco,
        cod_raca,
        id_proprietario,
        nome,
        peso,
        sexo
    }: AnimalPost) {
    try {
        const response = await api.post('/animal', {
            nome: nome,
            brinco: brinco,
            cod_raca: cod_raca,
            peso: peso,
            sexo: sexo,
            id_proprietario: id_proprietario
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}