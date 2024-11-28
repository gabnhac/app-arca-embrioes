import React, { useState } from "react";
import { Keyboard, ModalProps, TouchableWithoutFeedback } from "react-native";
import { Container, Content, InfoText, ModalWrapper, WrapperInfoInput } from "./styles";
import Select from "@components/Select";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { AnimalType } from "@services/getAnimalsByOwner";
import { numberMask } from "@utils/numberMask";
import Toast from "react-native-toast-message";
import postOocito from "@services/postOocito";

type Props = ModalProps & {
    onClose: () => void;
    femeas: AnimalType[];
};

export default function ModalOocito({ onClose, femeas, ...rest }: Props) {

    const [animalSelected, setAnimalSelected] = useState(femeas[0]);
    const [qtd, setQtd] = useState('1');
    const optionsFemea = [...femeas.map((item) => item.brinco)];


    async function handleRegisterOocito() {
        const response = await postOocito({
            quantidade: Number(qtd),
            id_animal: animalSelected.id_animal
        });

        if (response?.status === 200) {
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Óocito criado com sucesso'
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Falha na criação do óocito'
            });
        }
    }




    function defineFemeaSelected(brinco: string) {
        const femea = femeas.find((item) => item.brinco === brinco);
        if (femea) {
            setAnimalSelected(femea);
        }
    }




    return (
        <ModalWrapper {...rest}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                    onClose();
                    setAnimalSelected(femeas[0])
                }}
            >
                <Container>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <Content>
                            <InfoText style={{ alignSelf: 'center', fontSize: 17 }}>
                                Adicione um Oócito
                            </InfoText>

                            <WrapperInfoInput>
                                <InfoText>Animal</InfoText>
                                <Select
                                    options={optionsFemea}
                                    setOption={defineFemeaSelected}
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
                                    handleRegisterOocito()
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
