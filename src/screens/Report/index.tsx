import React, { useEffect, useState } from "react";
import { Container, WrapperBody, WrapperStockCards, WrapperTitle } from "./styles";
import Title from "@components/Title/Title";
import CardStock from "@components/CardStock";
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import CardMaterialAnimal from "@components/CardMaterialAnimal";
import { useAuth } from "../../hooks/useAuth";
import getEmbrioesByOwner from "@services/getEmbrioesByOwner";
import ModalEmbriao from "@components/ModalEmbriao";
import ModalMateriais from "@components/ModalMateriais";


export default function Report() {
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const { user } = useAuth();

    const [countEmbrioes, setCountEmbrioes] = useState(0);
    const [countOocitos, setCountOocitos] = useState(0);
    const [countSemen, setCountSemen] = useState(0);

    async function loadEmbrioes() {
        const response = await getEmbrioesByOwner(user.id);

        if (response && response.length > 0) {
            setCountEmbrioes(response.length)
        }
    }

    async function loadSemen() {

    }

    useEffect(() => {
        loadEmbrioes();
    }, []);

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
    }
    function closeModalSemen() {
        setIsVisibleSemen(false);
    }
    function closeModalOocito() {
        setIsVisibleOocito(false);
    }


    return (
        <Container>
            <ModalEmbriao
                visible={isVisibleEmbriao}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModalEmbriao}
                onClose={closeModalEmbriao}
            />

            <ModalMateriais
                onClose={closeModalSemen}
                visible={isVisibleSemen}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModalSemen}
                type="SEMEN"
            />

            <ModalMateriais
                onClose={closeModalOocito}
                visible={isVisibleOocito}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModalOocito}
                type="OOCITO"
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
                    count={countEmbrioes}
                    description="Total Embriões"
                    size="LARGE"
                    onPress={() => navigation.navigate('material_animal', { materialName: 'Embriões' })}
                    showModalAdd={openModalEmbriao}
                />


                <WrapperStockCards>
                    <CardStock
                        color="ROYAL_BLUE"
                        borderRadius="PARTIAL"
                        count={10}
                        description="Total Semen"
                        size="MEDIUM"
                        onPress={() => navigation.navigate('material_animal', { materialName: 'Semens' })}
                        showModalAdd={openModalSemen}

                    />
                    <CardStock
                        color="DARK_BLUE"
                        borderRadius="PARTIAL"
                        count={10}
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