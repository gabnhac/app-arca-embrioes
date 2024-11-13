import {api} from "./api";

export default async function getAnimalsByOwner(id: string){
    try {
        const response = await api.get(`/animal/proprietario/${id}`);
        
        console.log('Reposta post animals: ', response);
        return response;
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}