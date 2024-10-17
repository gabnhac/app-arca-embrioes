import React, { useState } from "react";
import { Container, Categories, WrapperTitle, Animals, WrapperTouchable, Header } from "./styles";
import Title from "@components/Title/Title";
import { FlatList, View } from "react-native";
import CardAnimal from "@components/CardAnimal";
import CardSearch from "@components/CardSearch";

export default function Home() {

    const dataDoadoras = [
        {
            raca: 'MALHADA',
            idade: 5,
            peso: 450,
            brinco: "1E05",
        },
        {
            raca: 'BRANGUS',
            idade: 3,
            peso: 500,
            brinco: "1E06",
        },
        {
            raca: 'HEREFORD',
            idade: 7,
            peso: 530,
            brinco: "1W05",
        },
    ]

    const dataDoadores = [
        {
            raca: 'BEEFALO',
            idade: 5,
            peso: 450,
            brinco: "1E05",
        },
        {
            raca: 'AZUL BELGA',
            idade: 3,
            peso: 500,
            brinco: "1E06",
        },
        {
            raca: 'HEREFORD',
            idade: 7,
            peso: 530,
            brinco: "1W05",
        },
    ]

    const [animais, setAnimais] = useState(dataDoadoras);
    return (
        <Container>
            <Header>
                <CardSearch
                />
                <Categories>
                    <WrapperTouchable
                        onPress={() => setAnimais(dataDoadoras)}
                    >
                        <Title
                            title="DOADORAS"
                            typeFontSize={16}
                            typeFontWeight="BOLD"
                        />
                    </WrapperTouchable>
                    <WrapperTouchable
                        onPress={() => setAnimais(dataDoadores)}
                    >
                        <Title
                            title="DOADORES"
                            typeFontSize={16}
                            typeFontWeight="BOLD"
                        />
                    </WrapperTouchable>
                </Categories>
            </Header>

            <Animals>
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
                        <View style={{ marginBottom: 10}} >
                            <CardAnimal
                                key={index}
                                raca={item.raca}
                                idade={item.idade}
                                peso={item.peso}
                                brinco={item.brinco}
                            />
                        </View>

                    )}
                />

            </Animals>

        </Container>
    )
}