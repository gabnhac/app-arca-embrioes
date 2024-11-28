import React, { useState } from "react";
import { Keyboard, ModalProps, TouchableWithoutFeedback } from "react-native";
import Select from "@components/Select";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { AnimalType } from "@services/getAnimalsByOwner";
import { numberMask } from "@utils/numberMask";
import Toast from "react-native-toast-message";
import postSemen from "@services/postSemen";
import { Container, Content, InfoText, ModalWrapper, WrapperInfoInput } from "./styles";

type Props = ModalProps & {
    onClose: () => void;
    machos: AnimalType[];
};

export default function ModalSemen({ onClose, machos, ...rest }: Props) {

    const [animalSelected, setAnimalSelected] = useState(machos[0]);
    const [qtd, setQtd] = useState('1');
    const optionsMacho = [...machos.map((item) => item.brinco)];


    async function handleRegisterSemen() {
        const response = await postSemen({
            quantidade: Number(qtd),
            id_animal: animalSelected.id_animal
        });

        if (response?.status === 200) {
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Semen criado com sucesso'
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Falha na criação do Semen'
            });
        }
    }





    function defineMachoSelected(brinco: string) {
        const macho = machos.find((item) => item.brinco === brinco);
        if (macho) {
            console.log("Fêmea Selecionada", macho);
            setAnimalSelected(macho);
        }
    }




    return (
        <ModalWrapper {...rest}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                    onClose();
                    setAnimalSelected(machos[0]);
                }}
            >
                <Container>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <Content>
                            <InfoText style={{ alignSelf: 'center', fontSize: 17 }}>
                                Adicione um Semen
                            </InfoText>

                            <WrapperInfoInput>
                                <InfoText>Animal</InfoText>
                                <Select
                                    options={optionsMacho}
                                    setOption={defineMachoSelected}
                                />
                            </WrapperInfoInput>
                            <WrapperInfoInput>
                                <InfoText>Quantidade</InfoText>
                                <Input
                                    onChangeText={text => {
                                        const newText = numberMask(text);
                                        setQtd(newText)
                                    }}
                                    value={qtd}
                                />
                            </WrapperInfoInput>
                            <Button
                                label="Criar"
                                onPress={() => {
                                    handleRegisterSemen()
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
