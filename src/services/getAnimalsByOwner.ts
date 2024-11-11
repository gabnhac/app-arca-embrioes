import api from "../axios/axios";

export default async function getAnimalsByOwner(id: string){
    try {
        const response = await api.post(`/animal/proprietario/${id}`);
        
        console.log('Reposta post animals: ', response);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}