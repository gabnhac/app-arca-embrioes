import React, { useState } from "react";
import { ModalProps, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Container, Content, InfoText, ModalWrapper, WrapperInfoInput, WrapperPressableInput } from "./styles";
import Select from "@components/Select";
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { AnimalType } from "@services/getAnimalsByOwner";
import postEmbriao from "@services/postEmbriao";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

type Props = ModalProps & {
    visible: boolean;
    onClose: () => void;
    machos: AnimalType[];
    femeas: AnimalType[]
};

export default function ModalEmbriao({ visible, onClose, machos, femeas, ...rest }: Props) {
    const [dataColeta, setDataColeta] = useState(new Date());
    const [dataDescongelamento, setDataDescongelamento] = useState<Date | null>(null);
    const [dataCongelamento, setDataCongelamento] = useState(new Date());
    const [femeaSelected, setFemeaSelected] = useState(femeas[0]);
    const [machoSelected, setMachoSelected] = useState(machos[0]);

    const [showDataCo, setShowDataCo] = useState(false);
    const [showDataCon, setShowDataCon] = useState(false);
    const [showDataDes, setShowDataDes] = useState(false);

    const optionsFemea = femeas.map((item) => item.brinco );
    const optionsMacho = machos.map((item) => item.brinco );

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    };

    const onChangeCo = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setDataColeta(selectedDate);
        }
        if (Platform.OS === 'android') {
            setShowDataCo(false);
        }
    };

    const onChangeCon = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setDataCongelamento(selectedDate);
        }
        if (Platform.OS === 'android') {
            setShowDataCon(false);
        }
    };

    const onChangeDes = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setDataDescongelamento(selectedDate);
        }
        if (Platform.OS === 'android') {
            setShowDataDes(false);
        }
    }

    function defineMachoSelected(brinco: string){
        const macho = machos.find((item) => item.brinco === brinco)
        if(macho)
            setMachoSelected(macho);
    }
    function defineFemeaSelected(brinco: string){
        const femea = femeas.find((item) => item.brinco === brinco)
        if(femea)
            setFemeaSelected(femea);
    }

    async function handleRegisterEmbriao(){
        const response = await postEmbriao({
            id_macho: machoSelected.id_animal,
            id_femea: femeaSelected.id_animal,
            data_fecundacao: dataColeta,
            data_congelamento: dataCongelamento,
            data_descongelamento: dataDescongelamento
        })

        if(response?.status === 200){
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Embrião criado'
            });
        }else{
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Falha na criação do embrião'
            });
        }
    }

    return (
        <ModalWrapper visible={visible} {...rest}>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                    onClose();
                }}
            >
                <Container>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <Content>
                            <InfoText style={{ alignSelf: 'center' }}>Adicione um Embrião</InfoText>
                            <WrapperInfoInput>
                                <InfoText>Macho: </InfoText>
                                <Select
                                    options={optionsMacho}
                                    setOption={defineMachoSelected}
                                />
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Fêmea: </InfoText>
                                <Select
                                    options={optionsFemea}
                                    setOption={defineFemeaSelected}
                                />
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Data Coleta</InfoText>
                                {showDataCo && (
                                    <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={dataColeta}
                                        onChange={onChangeCo}
                                    />
                                )}
                                <WrapperPressableInput
                                    onPress={() => setShowDataCo((prev) => !prev)}
                                >
                                    <Input
                                        placeholder={formatDate(dataColeta)}
                                        editable={false}
                                    />
                                </WrapperPressableInput>
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Data Congelamento</InfoText>
                                {showDataCon && (
                                    <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={dataCongelamento}
                                        onChange={onChangeCon}
                                    />
                                )}
                                <WrapperPressableInput
                                    onPress={() => setShowDataCon((prev) => !prev)}
                                >
                                    <Input
                                        placeholder={formatDate(dataCongelamento)}
                                        editable={false}
                                    />
                                </WrapperPressableInput>
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Data Descongelamento</InfoText>
                                {showDataDes && (
                                    <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={dataDescongelamento ? dataDescongelamento : new Date()}
                                        onChange={onChangeDes}
                                    />
                                )}
                                <WrapperPressableInput
                                    onPress={() => setShowDataDes((prev) => !prev)}
                                >
                                    <Input
                                        placeholder={
                                            dataDescongelamento !== null ?
                                            formatDate(dataDescongelamento)
                                            :
                                            ''
                                        }
                                        editable={false}
                                    />
                                </WrapperPressableInput>
                            </WrapperInfoInput>
                            <Button
                                label="Criar"
                                onPress={
                                    handleRegisterEmbriao
                                }
                                colorType="SECONDARY"
                                style={{alignSelf: 'center'}}
                            />
                        </Content>
                    </TouchableWithoutFeedback>
                </Container>
            </TouchableWithoutFeedback>
        </ModalWrapper>
    );
}
