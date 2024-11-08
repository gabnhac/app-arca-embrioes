import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";

import { Container, Categories, WrapperTitle, Animals, WrapperTouchable, Header } from "./styles";
import Title from "@components/Title/Title";
import CardAnimal from "@components/CardAnimal";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

import { animalState } from "@store/animal/types";
import { useDispatch } from "react-redux";
import { setAnimal } from "@store/animal/animalSlice"
import PopUpMenu from "@components/PopUpMenu";
import ArcaLogoFundo from "@assets/svgs/ArcaLogoFundo";


export default function Home() {

    const dataDoadoras = [
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
    ]

    const dataDoadores = [
        {
            raca: 'BEEFALO',
            idade: 5,
            peso: 450,
            brinco: "1E05",
            sexo: 'M',
            nome: 'Bufante 1',
            material: 6,
        },
        {
            raca: 'AZUL BELGA',
            idade: 3,
            peso: 500,
            brinco: "1E06",
            sexo: 'M',
            nome: 'Bufante 2',
            material: 8,
        },
        {
            raca: 'HEREFORD',
            idade: 7,
            peso: 530,
            brinco: "1W05",
            sexo: 'M',
            nome: 'Bufante 3',
            material: 10,
        },
    ]

    const [animais, setAnimais] = useState(dataDoadoras);
    const [isSelectedDoadoras, setIsSelectedDoadoras] = useState(true);

    const navigation = useNavigation<AppNavigatorRouteProps>();

    const dispatch = useDispatch();

    function handleSelectAnimal({ brinco, idade, material, nome, peso, raca, sexo }: animalState) {
        const animalObj = {
            brinco: brinco,
            idade: idade,
            material: material,
            nome: nome,
            peso: peso,
            raca: raca,
            sexo: sexo,
        }
        dispatch(setAnimal(animalObj))
        navigation.navigate('animal_details')
    }

    function handleChangeAnimalCategories(categoria: 'DOADORAS' | 'DOADORES') {
        if (categoria === 'DOADORAS') {
            setAnimais(dataDoadoras)
            setIsSelectedDoadoras(true);
        } else {
            setAnimais(dataDoadores);
            setIsSelectedDoadoras(false);
        }
    }



    return (
        <Container>
            <Header>
                <ArcaLogoFundo
                    style={{ position: 'absolute' }}
                />
                <PopUpMenu />
            </Header>

            <Animals>
                <Categories>
                    <WrapperTouchable
                        onPress={() => handleChangeAnimalCategories('DOADORAS')}
                    >
                        <Title
                            title="DOADORAS"
                            typeFontSize={16}
                            typeFontWeight="BOLD"
                            typeColor={isSelectedDoadoras ? 'VIOLET' : 'WHITE'}
                        />
                    </WrapperTouchable>
                    <WrapperTouchable
                        onPress={() => handleChangeAnimalCategories('DOADORES')}
                    >
                        <Title
                            title="DOADORES"
                            typeFontSize={16}
                            typeFontWeight="BOLD"
                            typeColor={isSelectedDoadoras ? 'WHITE' : 'VIOLET'}
                        />
                    </WrapperTouchable>
                </Categories>
                <WrapperTitle>
                    <Title
                        title="ANIMAIS"
                        typeFontSize={15}
                        typeFontWeight="BOLD"
                        typeColor="WHITE"
                    />
                </WrapperTitle>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={animais}
                    renderItem={({ item, index }) => (
                        <View style={{ marginBottom: 10 }} >
                            <CardAnimal
                                key={index}
                                raca={item.raca}
                                idade={item.idade}
                                peso={item.peso}
                                brinco={item.brinco}
                                onPress={() =>
                                    handleSelectAnimal(
                                        {
                                            raca: item.raca,
                                            brinco: item.brinco,
                                            idade: item.idade,
                                            material: item.material,
                                            nome: item.nome,
                                            peso: item.peso,
                                            sexo: item.sexo,
                                        }
                                    )
                                }
                            />
                        </View>

                    )}
                />

            </Animals>

        </Container>
    )
}