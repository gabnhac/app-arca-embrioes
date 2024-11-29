import CardOwner from "@components/CardOwner";
import { Container, Content, EmptyList, TextEmptyList, WrapperAddOwner, WrapperTitle, WrapperTouchableReload } from "./styles";
import { Dimensions, FlatList, Image } from "react-native";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";
import getOwners, { OwnerType } from "@services/getOwners";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import Loading from "@components/Loading";
import Button from "@components/Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from "react-native-toast-message";     
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function SelectOwner() {
    const { height, width } = Dimensions.get('screen');
    const [owners, setOwners] = useState<OwnerType[] | null | undefined>();
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const { setUserOwner, ipAPI } = useAuth();

    async function loadAllOwners() {
        const ownersArr = await getOwners();

        if (!ownersArr) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Erro de conexão',
                text2: 'Não foi possível buscar proprietários'

            })
            setOwners(null);
            return
        }

        setOwners([...ownersArr]);
    }

    function navigateToHome(owner: OwnerType) {
        navigation.navigate('home');
        setUserOwner(owner);
    }

    useFocusEffect(
        React.useCallback(() => {
            loadAllOwners();

            return () => {

            }
        }, [])
    )

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

            <Content>
                <WrapperTitle>

                    <Title
                        title="Escolha o proprietário"
                        typeFontSize={25}
                        typeFontWeight="BOLD"
                    />
                </WrapperTitle>
                {owners ?
                    <FlatList
                        data={owners}
                        contentContainerStyle={{
                            gap: 10
                        }}
                        ListEmptyComponent={() => (
                            <EmptyList>
                                <Ionicons name="alert-circle-outline" size={24} color="#FFFFFF" />
                                <TextEmptyList>Não há proprietários cadastrados</TextEmptyList>
                            </EmptyList>
                        )}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <CardOwner
                                onPress={() => navigateToHome(item)}
                                cnpj={item.CNPJ}
                                name={item.razao_social}
                                key={index}
                            />
                        )}
                    /> : (
                        owners === undefined ? <Loading /> : 
                        <WrapperTouchableReload
                            onPress={() => {
                                setOwners(undefined);
                                loadAllOwners();
                            }}
                        >
                            <MaterialCommunityIcons name="reload" size={45} color="#FFFFFF" />
                        </WrapperTouchableReload>
                    )}
            </Content>
            <WrapperAddOwner>
                <Button
                    onPress={() => {
                        navigation.navigate('register_owner');
                    }}
                    label="Cadastrar"
                    colorType="SECONDARY"
                />
            </WrapperAddOwner>

        </Container>
    )
}