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
import { setDoadorasRedux, setDoadoresRedux, setEmbrioesRedux, setOocitoByDoadorasRedux, setRacasRedux, setSemenByDoadoresRedux } from "@store/animal/reportSlice";
import getRacas, { RacaType } from "@services/getRacas";
import getEmbrioesByOwner from "@services/getEmbrioesByOwner";
import getSemenByAnimal from "@services/getSemenByAnimal";
import getOocitoByAnimal from "@services/getOocitoByAnimal";


export default function Home() {

    const { user, userLab } = useAuth();

    const [doadoras, setDoadoras] = useState<AnimalType[]>();
    const [doadores, setDoadores] = useState<AnimalType[]>();
    const [racas, setRacas] = useState<RacaType[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [isSelectedDoadoras, setIsSelectedDoadoras] = useState(true);

    const navigation = useNavigation<AppNavigatorRouteProps>();

    const dispatch = useDispatch();

    async function loadAll(id: number) {
        setIsLoading(true);
        const response = await getAnimalsByOwner(id);

        if (!response) {
            return
        }
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

        //Embriao
        const responseEmbriao = await getEmbrioesByOwner(user.id);

        if (responseEmbriao && responseEmbriao.length > 0) {
            console.log('DADOS EMBRIAO', responseEmbriao);
            dispatch(setEmbrioesRedux(responseEmbriao));
        }

        //Semen
        const idDoadores = doadoresArr?.map((item) => item.id_animal.toString()) || [];
        const responseSemen = await getSemenByAnimal(idDoadores);

        if (responseSemen) {
            console.log('DADOS SEMEN', responseSemen);
            dispatch(setSemenByDoadoresRedux(responseSemen));
        }

        //Oocito
        const idDoadoras = doadorasArr?.map((item) => item.id_animal.toString()) || [];
        console.log('IDDOADORAS', idDoadoras)
        const responseOocito = await getOocitoByAnimal(idDoadoras);

        if (responseOocito) {
            console.log('DADOS OOCITO', responseOocito);
            dispatch(setOocitoByDoadorasRedux(responseOocito));
        }
    }

    async function loadRacas() {
        const response =  await getRacas();
        if(response){
            setRacas(response);
            dispatch(setRacasRedux(response));
        }
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

    function defineRacaAnimals(idRaca: string) {
        const RacaName = racas?.find((item) => item.cod_raca === idRaca.toLowerCase())?.descricao

        if(RacaName){
            return RacaName
        }

        return 'Sem Raça'
    }

    function handleChangeAnimalCategories(categoria: 'DOADORAS' | 'DOADORES') {
        if (categoria === 'DOADORAS') {

            setIsSelectedDoadoras(true);
        } else {

            setIsSelectedDoadoras(false);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            loadAll(user.id);
            loadRacas();
            return () => {

            }
        }, [])
    );

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
                                    raca={defineRacaAnimals(item.cod_raca)}
                                    peso={item.peso}
                                    brinco={item.brinco}
                                    onPress={() =>
                                        handleSelectAnimal(
                                            {
                                                raca: defineRacaAnimals(item.cod_raca),
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