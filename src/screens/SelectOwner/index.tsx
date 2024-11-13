import CardOwner from "@components/CardOwner";
import { Container, Content, WrapperTitle } from "./styles";
import { Dimensions, FlatList, Image } from "react-native";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";
import getOwners, { OwnerType } from "@services/getOwners";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

export default function SelectOwner() {
    const { height, width } = Dimensions.get('screen');
    const [owners, setOwners] = useState<OwnerType[]>([]);
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const {setUserOwner} = useAuth()

    async function getAllOwners() {
        const ownersArr = await getOwners();
        setOwners([...ownersArr])
    }

    function navigateToHome(owner: OwnerType) {
        navigation.navigate('home')
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
                <FlatList
                    data={owners}
                    contentContainerStyle={{
                        gap: 10
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <CardOwner
                            onPress={() => navigateToHome(item)}
                            cnpj={item.CNPJ}
                            name={item.razao_social}
                            key={index}
                        />
                    )}
                />



            </Content>

        </Container>
    )
}