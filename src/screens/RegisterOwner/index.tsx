import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import { Container, ContainerContent, WrapperForm } from "./styles";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cnpjMask } from "@utils/cnpjMask";
import { telMask } from "@utils/telMask";
import BackOption from "@components/BackOption";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import postOwner from "@services/postOwner";
import Toast from "react-native-toast-message";

type FormDataProps = {
    name: string;
    email: string;
    cnpj: string;
    tel: string;
    password: string;
    password_confirm: string;
}

const registerOwnerSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('E-mail inválido'),
    cnpj: yup
        .string()
        .min(18, 'CNPJ inválido')
        .required('Informe o CNPJ'),
    tel: yup
        .string()
        .min(15, 'Telefone inválido')
        .required('Informe o número de telefone'),
    password: yup.string().required('Informa a senha').min(8, 'A senha deve ter pelo menos 8 dígitos'),
    password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref("password"), ""], 'A confirmação da senha não confere'),
});

export default function RegisterOwner() {
    const { height, width } = Dimensions.get('screen');
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(registerOwnerSchema),
    });

    const navigation = useNavigation<AppNavigatorRouteProps>();

    async function handleRegister({ cnpj, email, name, password, tel }: FormDataProps) {
        const cnpjFormat = cnpj.replace(/\D/g, '');
        const telNumber = Number(tel.replace(/\D/g, ''));
        const ddd = Number(tel[1] + tel[2]);
        console.log('data',{ cnpjFormat, ddd, email, name, password, telNumber })
        const response = await postOwner({ 
            cnpj: cnpjFormat, 
            email, 
            razao_social: name, 
            senha: password, 
            telefone: telNumber,
            ddd
        });

        if(response?.status === 200){
            Toast.show({
                position: 'bottom',
                type: 'success',
                text1: 'Proprietário cadastrado com sucesso'
            })
        }else{
            Toast.show({
                position: 'bottom',
                type: 'error',
                text1: 'Não foi possível cadastrar o proprietário'
            })
        }

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
            <BackOption
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <ContainerContent>
                    
                    <Title
                        title="Cadastre um novo proprietário"
                        typeFontSize={25}
                        typeFontWeight="BOLD"
                        typeColor="VIOLET"
                    />
                    <WrapperForm>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Nome"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.name?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="E-mail"
                                    keyboardType="email-address"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="cnpj"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="CNPJ"
                                    keyboardType="numeric"
                                    value={value}
                                    onChangeText={(text) => {
                                        const formattedValue = cnpjMask(text);
                                        onChange(formattedValue);
                                    }}
                                    errorMessage={errors.cnpj?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="tel"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Telefone"
                                    keyboardType="numeric"
                                    value={value}
                                    onChangeText={(text) => {
                                        const formattedValue = telMask(text);
                                        onChange(formattedValue);
                                    }}
                                    errorMessage={errors.tel?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Senha"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password_confirm"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Confirmar senha"
                                    onChangeText={onChange}
                                    secureTextEntry
                                    value={value}
                                    errorMessage={errors.password_confirm?.message}
                                    onSubmitEditing={handleSubmit(handleRegister)}
                                />
                            )}
                        />

                        <Button
                            label="Criar"
                            shadowWhite
                            onPress={handleSubmit(handleRegister)}
                        />

                    </WrapperForm>
                </ContainerContent>
            </ScrollView>
        </Container>
    );
}
