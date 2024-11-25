import React, { useState } from "react";
import { Keyboard, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Container, Content, InfoText, ModalWrapper, WrapperInfoInput } from "./styles";
import Select from "@components/Select";
import Input from "@components/Input/Input";
import Button from "@components/Button";

type Props = ModalProps & {
    onClose: () => void;
    type: 'OOCITO' | 'SEMEN';
};

export default function ModalMateriais({ onClose, type, ...rest }: Props) {
    function handleRegisterSemen() {

    }

    function handleRegisterOocito() {
 
    }

    return (
        <ModalWrapper {...rest}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                    onClose(); 
                }}
            >
                <Container>
                    <TouchableWithoutFeedback onPress={() => {}}>
                        <Content>
                            <InfoText style={{ alignSelf: 'center', fontSize: 17 }}>
                                Adicione um {type === 'OOCITO' ? 'Oócito' : 'Semen'}
                            </InfoText>

                            <WrapperInfoInput>
                                <InfoText>Animal</InfoText>
                                <Select
                                    options={['Opção 1', 'Opção 2', 'Opção 3']}
                                    setOption={() => {}}
                                />
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Quantidade</InfoText>
                                <Input />
                            </WrapperInfoInput>
                            <Button
                                label="Criar"
                                onPress={() => {
                                    type === 'OOCITO' ? handleRegisterOocito() : handleRegisterSemen();
                                }}
                                style={{ alignSelf: 'center' }}
                            />
                        </Content>
                    </TouchableWithoutFeedback>
                </Container>
            </TouchableWithoutFeedback>
        </ModalWrapper>
    );
}
