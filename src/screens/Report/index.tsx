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
import { selectDoadorasRedux, selectDoadoresRedux, setEmbrioesRedux, setOocitoByDoadorasRedux, setSemenByDoadoresRedux } from "@store/animal/reportSlice";
import getOocitoByAnimal from "@services/getOocitoByAnimal";
import ModalOocito from "@components/ModalOocito";
import ModalSemen from "@components/ModalSemen";


export default function Report() {
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const { user } = useAuth();

    const dispatch = useDispatch();

    const doadoras = useSelector(selectDoadorasRedux);
    const doadores = useSelector(selectDoadoresRedux);

    const [embrioes, setEmbrioes] = useState<EmbriaoType[]>();
    const [countOocitos, setCountOocitos] = useState(0);
    const [countSemen, setCountSemen] = useState(0);

    const [reloadScreen, setReloadScreen] = useState(0);

    async function loadEmbrioes() {
        const response = await getEmbrioesByOwner(user.id);

        if (response && response.length > 0) {
            dispatch(setEmbrioesRedux(response));
            setEmbrioes(response);
        }
    }


    async function loadSemen() {
        const idDoadores = doadores.map((item) => item.id_animal.toString());

        let total = 0;

        const response = await getSemenByAnimal(idDoadores);

        if (response) {
            dispatch(setSemenByDoadoresRedux(response));
            for (const material of response) {
                total += material.Quantidade;
            }
            setCountSemen(total);
        }

    }

    async function loadOocito() {
        const idDoadoras = doadoras.map((item) => item.id_animal.toString());

        let total = 0;

        const response = await getOocitoByAnimal(idDoadoras);

        if (response) {

            dispatch(setOocitoByDoadorasRedux(response));
            for (const material of response) {
                total += material.Quantidade;
            }
            setCountOocitos(total);
        }


    }

    useEffect(() => {
        loadEmbrioes();
        loadSemen();
        loadOocito();
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
                    count={embrioes?.length || 0}
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