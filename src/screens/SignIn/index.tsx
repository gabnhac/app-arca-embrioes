import React from "react";
import { ScrollView, Dimensions, Image } from "react-native";

import { BoxLogo, Container, ContainerContent, TextForgotPass, WrapperForgotPass, WrapperForm } from "./styles";

import ArcaLogo from "@assets/svgs/ArcaLogo";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import BackgroundImg from "@assets/pastoBackground.jpg";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormDataprops = {
    email: string;
    password: string;
}

const signInSchema = yup.object({
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    password: yup.string().required('Informe a senha')
})

export default function SignIn() {
    const { height, width } = Dimensions.get('screen');

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataprops>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signInSchema)
    });

    function handleNavigateSignUp() {
        navigation.navigate("signup");
    }

    function handleSingIn({ email, password }: FormDataprops) {
        console.log({ email, password });
    }
    return (
        <Container>
            <Image
                source={BackgroundImg}
                width={width}
                height={height}
                alt="Vacas no pasto"
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    flex: 1,
                }}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <ContainerContent>
                    <BoxLogo>
                        <ArcaLogo />
                    </BoxLogo>
                    <WrapperForm>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="E-mail"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.email?.message}
                                />
                            )}

                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="password"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleSingIn)}
                                    returnKeyType="send"
                                    errorMessage={errors.password?.message}
                                />
                            )}

                        />

                        <Button
                            label="Entrar"
                            shadowWhite
                            onPress={handleSubmit(handleSingIn)}
                        />

                        <Button
                            label="Crie uma Conta"
                            colorType="SECONDARY"
                            onPress={handleNavigateSignUp}
                        />
                    </WrapperForm>
                </ContainerContent>
            </ScrollView>
        </Container>
    )
}