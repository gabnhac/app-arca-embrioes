import { api } from "./api";

export interface EmbriaoType {
    cod_embriao: number;
    id_macho: string;
    id_femea: string;
    data_fecundacao: Date;
    data_congelamento: Date;
    data_descongelamento: Date;
};

export default async function getEmbrioesByOwner(idOwner: number) {
    try {
        const response = await api.get(`/embriao/proprietario/${idOwner}`);
        
    } catch (error) {
        return null;
    }
}






