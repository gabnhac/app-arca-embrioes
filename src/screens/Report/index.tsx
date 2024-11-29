import React, { useEffect, useState } from "react";
import { Container, WrapperBody, WrapperStockCards, WrapperTitle } from "./styles";
import Title from "@components/Title/Title";
import CardStock from "@components/CardStock";
import BackOption from "@components/BackOption";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import { useAuth } from "../../hooks/useAuth";
import getEmbrioesByOwner, { EmbriaoType } from "@services/getEmbrioesByOwner";
import ModalEmbriao from "@components/ModalEmbriao";
import ModalMateriais from "@components/ModalOocito";
import getSemenByAnimal from "@services/getSemenByAnimal";
import { useDispatch, useSelector } from "react-redux";
import { selectDoadorasRedux, selectDoadoresRedux, selectEmbrioesRedux, selectOocitoByDoadorasRedux, selectSemenByDoadoresRedux, setEmbrioesRedux, setOocitoByDoadorasRedux, setSemenByDoadoresRedux } from "@store/animal/reportSlice";
import getOocitoByAnimal from "@services/getOocitoByAnimal";
import ModalOocito from "@components/ModalOocito";
import ModalSemen from "@components/ModalSemen";


export default function Report() {
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const { user } = useAuth();

    const dispatch = useDispatch();

    const doadoras = useSelector(selectDoadorasRedux);
    const doadores = useSelector(selectDoadoresRedux);

    const embrioesRedux = useSelector(selectEmbrioesRedux);
    const semenRedux = useSelector(selectSemenByDoadoresRedux);
    const oocitoRedux = useSelector(selectOocitoByDoadorasRedux);

    console.log('embrioesRedux', embrioesRedux);
    console.log('semenRedux', semenRedux);
    console.log('oocitoRedux', oocitoRedux);

    const [countOocitos, setCountOocitos] = useState(0);
    const [countSemen, setCountSemen] = useState(0);

    const [reloadScreen, setReloadScreen] = useState(0);

    function calculateTotalSemen(){
        let total = 0;
        for (const material of semenRedux) {
            total += material.Quantidade;
        }
        setCountSemen(total);
    }

    function calculateTotalOocito(){
        let total = 0;
        for (const material of oocitoRedux) {
            total += material.Quantidade;
        }
        setCountOocitos(total);
    }



    useEffect(() => {
        calculateTotalSemen();
        calculateTotalOocito();
    }, [reloadScreen]);

    const [isVisibleEmbriao, setIsVisibleEmbriao] = useState(false);
    const [isVisibleSemen, setIsVisibleSemen] = useState(false);
    const [isVisibleOocito, setIsVisibleOocito] = useState(false);

    function openModalEmbriao() {
        setIsVisibleEmbriao(true);
    };
    function openModalSemen() {
        setIsVisibleSemen(true);
    };
    function openModalOocito() {
        setIsVisibleOocito(true);
    };

    function closeModalEmbriao() {
        setIsVisibleEmbriao(false);
        setReloadScreen(prev => prev + 1);
    }
    function closeModalSemen() {
        setIsVisibleSemen(false);
        setReloadScreen(prev => prev + 1);
    }
    function closeModalOocito() {
        setIsVisibleOocito(false);
        setReloadScreen(prev => prev + 1);
    }


    return (
        <Container>
            <ModalEmbriao
                visible={isVisibleEmbriao}
                machos={doadores}
                femeas={doadoras}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModalEmbriao}
                onClose={closeModalEmbriao}
            />

            <ModalOocito
                onClose={closeModalOocito}
                visible={isVisibleOocito}
                transparent={true}
                animationType="fade"
                femeas={doadoras}
                onRequestClose={closeModalOocito}
            />

            <ModalSemen
                onClose={closeModalSemen}
                visible={isVisibleSemen}
                transparent={true}
                animationType="fade"
                machos={doadores}
                onRequestClose={closeModalSemen}
            />


            <BackOption
                onPress={() => navigation.goBack()}
            />
            <WrapperTitle>
                <Title
                    title="Estoque"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
            </WrapperTitle>

            <WrapperBody>
                <CardStock
                    color="LIGHT_BLUE"
                    borderRadius="FULL"
                    count={embrioesRedux?.length || 0}
                    description="Total Embriões"
                    size="LARGE"
                    onPress={() => navigation.navigate('material_details')}
                    showModalAdd={openModalEmbriao}
                />


                <WrapperStockCards>
                    <CardStock
                        color="ROYAL_BLUE"
                        borderRadius="PARTIAL"
                        count={countSemen}
                        description="Total Semen"
                        size="MEDIUM"
                        onPress={() => navigation.navigate('material_animal', { materialName: 'Semens' })}
                        showModalAdd={openModalSemen}

                    />
                    <CardStock
                        color="DARK_BLUE"
                        borderRadius="PARTIAL"
                        count={countOocitos}
                        description="Total Oócitos"
                        size="MEDIUM"
                        onPress={() => navigation.navigate('material_animal', { materialName: 'Oócitos' })}
                        showModalAdd={openModalOocito}
                    />
                </WrapperStockCards>
            </WrapperBody>


        </Container>
    )
}