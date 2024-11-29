import React, { useState } from "react";
import { ModalProps, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Container, Content, InfoText, ModalWrapper, WrapperInfoInput, WrapperPressableInput } from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from "@components/Input/Input";
import Button from "@components/Button";
import Toast from "react-native-toast-message";
import editEmbriao from "@services/editEmbriao";

type Props = ModalProps & {
    visible: boolean;
    onClose: () => void;
    idEmbriao: number;
    dataCongelamento: Date;
};

export default function ModalEditEmbriao({ visible, onClose, dataCongelamento, idEmbriao, ...rest }: Props) {
    const [dataDescongelamento, setDataDescongelamento] = useState<Date>(new Date);

    const [showDataDes, setShowDataDes] = useState(false);

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).format(date);
    };

    const onChangeDes = (event: any, selectedDate?: Date) => {
        setShowDataDes(false);

        if (event.type === "set" && selectedDate) {
            setDataDescongelamento(selectedDate);
        }
    };

    async function handleEditEmbriao() {
         const response = await editEmbriao({
             id_embriao: idEmbriao,
             data_congelamento: dataCongelamento,
             data_descongelamento: dataDescongelamento
         });

        if (response?.status === 200) {
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Data adicionada com sucesso'
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Falha ao adicionar a data'
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
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <Content>
                            <InfoText style={{ alignSelf: 'center' }}>Descongelamento</InfoText>

                            <WrapperInfoInput>
                                
                                {showDataDes && (
                                    <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={dataDescongelamento}
                                        onChange={onChangeDes}
                                    />
                                )}
                                <WrapperPressableInput
                                    onPress={() => {
                                        if (!showDataDes) {
                                            setShowDataDes(true);
                                        }
                                    }}
                                >
                                    <Input
                                        placeholder={formatDate(dataDescongelamento)}
                                        editable={false}
                                    />
                                </WrapperPressableInput>
                            <Button
                                label="Adicionar"
                                onPress={handleEditEmbriao}
                                style={{ alignSelf: 'center' }}
                            />
                            </WrapperInfoInput>
                        </Content>
                    </TouchableWithoutFeedback>
                </Container>
            </TouchableWithoutFeedback>
        </ModalWrapper>
    );
}
