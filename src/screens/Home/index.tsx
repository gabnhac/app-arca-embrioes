import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import {
    Container,
    Categories,
    WrapperTitle,
    Animals,
    WrapperTouchable,
    Header,
    AnimalList,
    AddButton,
    ReloadText,
} from "./styles";
import Title from "@components/Title/Title";
import CardAnimal from "@components/CardAnimal";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

import { animalState } from "@store/animal/types";
import { useDispatch } from "react-redux";
import { setAnimal } from "@store/animal/animalSlice"
import PopUpMenu from "@components/PopUpMenu";
import ArcaLogoFundo from "@assets/svgs/ArcaLogoFundo";
import { useAuth } from "../../hooks/useAuth";
import getAnimalsByOwner, { AnimalType } from "@services/getAnimalsByOwner";
import Feather from '@expo/vector-icons/Feather';

import theme from "@theme/index";
import Loading from "@components/Loading";
import { setDoadorasRedux, setDoadoresRedux, setRacasRedux } from "@store/animal/reportSlice";
import getRacas, { RacaType } from "@services/getRacas";


export default function Home() {

    const { user, userLab } = useAuth();

    const [doadoras, setDoadoras] = useState<AnimalType[]>();
    const [doadores, setDoadores] = useState<AnimalType[]>();
    const [racas, setRacas] = useState<RacaType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isResponse, setIsResponse] = useState(false);
    const [isSelectedDoadoras, setIsSelectedDoadoras] = useState(true);

    const navigation = useNavigation<AppNavigatorRouteProps>();

    const dispatch = useDispatch();

    async function loadAnimals(id: number) {
        setIsLoading(true);
        const response = await getAnimalsByOwner(id);

        if (!response) {
            return
        }
        console.log('animals',response);
        setIsResponse(true);
        let doadoresArr = [];
        let doadorasArr = [];
        for (const animal of response) {
            if (animal.sexo === 'm' || animal.sexo === 'M') {
                doadoresArr.push(animal);
            } else {
                doadorasArr.push(animal);
            }
        }
        setDoadoras(doadorasArr);
        setDoadores(doadoresArr);
        dispatch(setDoadorasRedux(doadorasArr));
        dispatch(setDoadoresRedux(doadoresArr));
        setIsLoading(false);
    }

    function handleSelectAnimal({ brinco, material, nome, peso, raca, sexo }: animalState) {
        const animalObj = {
            brinco: brinco,
            material: material,
            nome: nome,
            peso: peso,
            raca: raca,
            sexo: sexo,
        };
        dispatch(setAnimal(animalObj));
        navigation.navigate('animal_details');
    }

    function handleChangeAnimalCategories(categoria: 'DOADORAS' | 'DOADORES') {
        if (categoria === 'DOADORAS') {

            setIsSelectedDoadoras(true);
        } else {

            setIsSelectedDoadoras(false);
        }
    }

    async function loadRacas(){
        const response = await getRacas();
        
        if(response){
            setRacas(response);
            dispatch(setRacasRedux(response));
        }
        
    }

    function defineRacaAnimal(idRaca: string){
        const raca = racas.find((item) => item.cod_raca = idRaca)
         
        if(raca){
            return raca.descricao
        }

        return 'SEM RAÇA'
    }

    useFocusEffect(
        React.useCallback(() => {
            loadAnimals(user.id);
            loadRacas();
            return () => {

            }
        }, [])
    )

    // console.log('doadoras home', doadoras);
    // console.log('doadores home', doadores);
     console.log('RACAS', racas);
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
                        disabled={isSelectedDoadoras}
                        onPress={() => {
                            handleChangeAnimalCategories('DOADORAS')

                        }}
                    >
                        <Title
                            title="DOADORAS"
                            typeFontSize={16}
                            typeFontWeight="BOLD"
                            typeColor={isSelectedDoadoras ? 'VIOLET' : 'WHITE'}
                        />
                    </WrapperTouchable>

                    <WrapperTouchable
                        disabled={!isSelectedDoadoras}
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

                {userLab.CNPJ &&
                    <AddButton
                        onPress={() => navigation.navigate('animal_details')}
                    >
                        <Feather name="plus-circle" size={45} color={theme.COLORS.RUSSIAN_VIOLET} />
                    </AddButton>
                }
                <AnimalList>
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
                        ListEmptyComponent={() => (
                            isLoading ?
                                <Loading />
                                :
                                <ReloadText>Não há animais cadastrados</ReloadText>


                        )}
                        data={isSelectedDoadoras ? doadoras : doadores}
                        renderItem={({ item, index }) => (
                            <View style={{ marginBottom: 10 }} >
                                <CardAnimal
                                    key={index}
                                    raca={defineRacaAnimal(item.cod_raca)}
                                    peso={item.peso}
                                    brinco={item.brinco}
                                    onPress={() =>
                                        handleSelectAnimal(
                                            {
                                                raca: defineRacaAnimal(item.cod_raca),
                                                brinco: item.brinco,
                                                material: 10,
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

                </AnimalList>

            </Animals>
        </Container>
    )
}