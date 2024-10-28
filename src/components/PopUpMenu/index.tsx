import { Modal, SafeAreaView } from "react-native";
import { ButtonMenu, Container } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";

export default function PopUpMenu(){

    const [visible, setVisible] = useState(false);
    return(
        <Container>
            <ButtonMenu>
            <Entypo name="menu" size={24} color="black" />

            </ButtonMenu>
            <Modal transparent visible={visible}>
                <SafeAreaView style={{flex: 1, backgroundColor: 'red'}} onTouchStart={() => setVisible(false)}>

                </SafeAreaView>
            </Modal>
        </Container>
    )
}