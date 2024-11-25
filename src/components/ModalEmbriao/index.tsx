import React, { useState } from "react";
import { ModalProps, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Container, Content, InfoText, ModalWrapper, WrapperInfoInput, WrapperPressableInput } from "./styles";
import Select from "@components/Select";
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from "@components/Input/Input";
import Button from "@components/Button";

type Props = ModalProps & {
    visible: boolean;
    onClose: () => void;
};

export default function ModalEmbriao({ visible, onClose, ...rest }: Props) {
    const [dataColeta, setDataColeta] = useState(new Date());
    const [dataDescongelamento, setDataDescongelamento] = useState(new Date());
    const [dataCongelamento, setDataCongelamento] = useState(new Date());

    const [showDataCo, setShowDataCo] = useState(false);
    const [showDataCon, setShowDataCon] = useState(false);
    const [showDataDes, setShowDataDes] = useState(false);

    const [initialValueLastDate, setInitialValueLastDate] = useState();

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
    };

    function handleRegisterEmbriao(){

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
                                    options={['Opção 1', 'Opção 2']}
                                    setOption={() => {}}
                                />
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Fêmea: </InfoText>
                                <Select
                                    options={['Opção 1']}
                                    setOption={() => {}}
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
                                        value={dataDescongelamento}
                                        onChange={onChangeDes}
                                    />
                                )}
                                <WrapperPressableInput
                                    onPress={() => setShowDataDes((prev) => !prev)}
                                >
                                    <Input
                                        placeholder={
                                            initialValueLastDate &&
                                            formatDate(dataDescongelamento)
                                        
                                        }
                                        editable={false}
                                    />
                                </WrapperPressableInput>
                            </WrapperInfoInput>
                            <Button
                                label="Criar"
                                onPress={handleRegisterEmbriao}
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
