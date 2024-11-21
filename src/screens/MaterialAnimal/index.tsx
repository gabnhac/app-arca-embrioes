import Title from "@components/Title/Title";
import { Container, WrapperContent, WrapperHeader } from "./styled";
import CardSearch from "@components/CardSearch";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps, AppRoutes } from "@routes/app.routes";
import BackOption from "@components/BackOption";
import CardMaterialAnimal from "@components/CardMaterialAnimal";
import { FlatList } from "react-native";
import { useState } from "react";

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

    const [materialAnimal, setMaterialAnimal] = useState(dummyData)

    function searchByRaca(input: string){
        let search;
        if(input.match(/\d/g)){
            search = dummyData.filter(element => element.brinco.toLowerCase().includes(input.toLowerCase()));
        }else{
            search = dummyData.filter(element => element.raca.toLowerCase().includes(input.toLowerCase()));
        }
        setMaterialAnimal(search)
    }

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
                <CardSearch 
                    placeholder="Pesquise por raça ou brinco"
                    onChangeText={(value) => searchByRaca(value)}
                />
                <Title
                    title={materialName}
                    typeFontSize={20}
                    typeFontWeight="BOLD"
                />
            </WrapperHeader>


                <FlatList
                    data={materialAnimal}
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