import { Dimensions, Image } from "react-native";
import { Container, WrapperInputIp } from "./styles";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { useAuth } from "../../hooks/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { ipMask } from "@utils/ipMask";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import theme from "@theme/index";

type FormIp = {
    ip: string;
}

const ipSchema = yup.object({
    ip: yup.string().required('Informe o ip local do servidor').min(12, 'Ip inválido')
});

export default function RegisterIp() {
    const { height, width } = Dimensions.get('screen');

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const {control, handleSubmit, formState: {errors}} = useForm<FormIp>({
        resolver: yupResolver(ipSchema)
    });
    const {setAPI, ipAPI} = useAuth();

    function handleSetIp({ ip }: FormIp) {
        setAPI(ip);
        console.log(`IP definido como: ${ip}`); 
    }

    return (
        <Container>
            <Image
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    flex: 1,
                }}
                source={BackgroundImg}
                alt="Gado no pasto"
            />
            <WrapperInputIp>
                <Controller
                    control={control}
                    name="ip"
                    render={({field: {onChange, value}}) => (
                        <Input
                            placeholder="Digite seu ip"
                            onChangeText={(text) => {
                                const newText = ipMask(text)
                                onChange(newText);
                            }}
                            value={value}
                            errorMessage={errors.ip?.message}
                        />

                    )}
                />

                <Button
                    label="Definir"
                    colorType="SECONDARY"
                    onPress={handleSubmit(handleSetIp)}
                />
                <Button
                    label="Continuar"
                    disabled={ipAPI === '0'}
                    style={{backgroundColor: ipAPI === '0' ? theme.COLORS.FRENCH_GRAY : theme.COLORS.RUSSIAN_VIOLET}}
                    onPress={() => navigation.navigate('presentation')}
                />
            </WrapperInputIp>
        </Container>
    )
}