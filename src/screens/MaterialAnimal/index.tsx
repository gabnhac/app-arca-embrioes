import Title from "@components/Title/Title";
import { Container, WrapperContent, WrapperHeader } from "./styled";
import CardSearch from "@components/CardSearch";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps, AppRoutes } from "@routes/app.routes";
import BackOption from "@components/BackOption";
import CardMaterialAnimal from "@components/CardMaterialAnimal";
import { FlatList } from "react-native";

type MaterialAnimalRouteParams = RouteProp<AppRoutes, 'material_animal'>;

export default function MaterialAnimal({ route }: { route: MaterialAnimalRouteParams }) {
    const { materialName } = route.params;
    const navigation = useNavigation();

    const dummyData = [
        {
            raca: 'MALHADA',
            idade: 5,
            peso: 450,
            brinco: "1E05",
            sexo: 'F',
            nome: 'Mimosa 1',
            material: 30,
        },
        {
            raca: 'BRANGUS',
            idade: 3,
            peso: 500,
            brinco: "1E06",
            sexo: 'F',
            nome: 'Mimosa 2',
            material: 20,
        },
        {
            raca: 'HEREFORD',
            idade: 7,
            peso: 530,
            brinco: "1W05",
            sexo: 'F',
            nome: 'Mimosa 3',
            material: 15,
        },
        {
            raca: 'HEREFORD',
            idade: 7,
            peso: 530,
            brinco: "1W05",
            sexo: 'F',
            nome: 'Mimosa 3',
            material: 15,
        },
        {
            raca: 'HEREFORD',
            idade: 7,
            peso: 530,
            brinco: "1W05",
            sexo: 'F',
            nome: 'Mimosa 3',
            material: 15,
        },
    ]
    return (
        <Container>
            <BackOption
                onPress={() => navigation.goBack()}
            />
            <WrapperHeader>
                <Title
                    title="Estoque"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
                <CardSearch />
                <Title
                    title={materialName}
                    typeFontSize={20}
                    typeFontWeight="BOLD"
                />
            </WrapperHeader>


                <FlatList
                    data={dummyData}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{
                        gap: 25
                    }}
                    contentContainerStyle={{
                        padding: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 25

                    }}
                    renderItem={({ item, index }) => (
                        <CardMaterialAnimal
                            brinco={item.brinco}
                            qtd={item.material}
                            raca={item.raca}
                        />

                    )}
                />



        </Container>
    )
}