import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";

import { Container, Categories, WrapperTitle, Animals, WrapperTouchable, Header, EmptyList, TextEmptyList, AnimalList, AddButton } from "./styles";
import Title from "@components/Title/Title";
import CardAnimal from "@components/CardAnimal";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

import { animalState } from "@store/animal/types";
import { useDispatch } from "react-redux";
import { setAnimal } from "@store/animal/animalSlice"
import PopUpMenu from "@components/PopUpMenu";
import ArcaLogoFundo from "@assets/svgs/ArcaLogoFundo";
import { useAuth } from "../../hooks/useAuth";
import getAnimalsByOwner, { AnimalType } from "@services/getAnimalsByOwner";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import theme from "@theme/index";
import Loading from "@components/Loading";


export default function Home() {

    const { user, userLab } = useAuth();

    const [doadoras, setDoadoras] = useState<AnimalType[]>([]);
    const [doadores, setDoadores] = useState<AnimalType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSelectedDoadoras, setIsSelectedDoadoras] = useState(true);

    const navigation = useNavigation<AppNavigatorRouteProps>();

    const dispatch = useDispatch();

    async function loadAnimals(id: number){
        const response = await getAnimalsByOwner(id);

        if(!response)
            return 
        let doadoresArr = [];
        let doadorasArr = [];
        for (const animal of response) {
            if(animal.sexo === 'm'){
                doadoresArr.push(animal);
            }else{
                doadorasArr.push(animal);
            }
        }
        setDoadoras(doadorasArr);
        setDoadores(doadoresArr);
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

    useEffect(() => {
        loadAnimals(user.id);
    }, [])

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
                        onPress={() =>{
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
                    {isLoading ? <Loading/> : <FlatList
                        showsVerticalScrollIndicator={false}
                        data={isSelectedDoadoras ? doadoras : doadores}
                        ListEmptyComponent={() => (
                            <EmptyList>
                                <Ionicons name="alert-circle-outline" size={30} color={theme.COLORS.YELLOW_ALERT} />
                                <TextEmptyList style={{color: '#000000'}}>Não há animais cadastrados</TextEmptyList>
                            </EmptyList>
                        )}
                        renderItem={({ item, index }) => (
                            <View style={{ marginBottom: 10 }} >
                                <CardAnimal
                                    key={index}
                                    raca={'modegus'}
                                    peso={item.peso}
                                    brinco={item.brinco}
                                    onPress={() =>
                                        handleSelectAnimal(
                                            {
                                                raca: 'modegus',
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
                    />}
                </AnimalList>
                

            </Animals>
        </Container>
    )
}