import CardOwner from "@components/CardOwner";
import { Container, Content, EmptyList, TextEmptyList, WrapperAddOwner, WrapperTitle } from "./styles";
import { Dimensions, FlatList, Image } from "react-native";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";
import getOwners, { OwnerType } from "@services/getOwners";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import Loading from "@components/Loading";
import Button from "@components/Button";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SelectOwner() {
    const { height, width } = Dimensions.get('screen');
    const [owners, setOwners] = useState<OwnerType[]>([]);
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const {setUserOwner} = useAuth()

    async function getAllOwners() {
        const ownersArr = await getOwners();
        setOwners([...ownersArr]);
    }

    function navigateToHome(owner: OwnerType) {
        navigation.navigate('home');
        setUserOwner(owner);
    }

    useEffect(() => {
        getAllOwners();
    }, [])

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
                /> : <Loading/> }
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