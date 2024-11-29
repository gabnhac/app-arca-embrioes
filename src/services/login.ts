import { api } from "./api";
import Toast from "react-native-toast-message";

export type LoginType = {
    email: string,
    senha: string
}

export default async function Login({ email, senha }: LoginType) {
    try {
        const response = await api.post('/login', { email, senha });

        if (response.status === 200) {
            const dataString = response.data.toString();
            const jsonStartIndex = dataString.indexOf('{');

            if (jsonStartIndex !== -1) {
                    const jsonData = JSON.parse(dataString.slice(jsonStartIndex));
                    return jsonData;
            } else {
                console.error('Formato de resposta inválido');
                Toast.show({
                    type: 'error',
                    text1: 'Resposta inesperada do servidor',
                    position: 'bottom',
                });
            }
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        Toast.show({
            type: 'error',
            text1: 'Email ou senha incorretos',
            text2: 'Tente novamente mais tarde',
            position: 'bottom',
        });
    }

    return undefined;
}
