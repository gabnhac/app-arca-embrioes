import { useRef, useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity, View, Animated, Easing } from "react-native";

import { ButtonMenu, Container, Option, WrapperOptions } from "./styles";

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";



export default function PopUpMenu({}) {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation<AppNavigatorRouteProps>();

    const navigateOptions = [
        {
            title: 'Perfil',
            icon: 'user',
            action: () => navigation.navigate('profile')

        },
        {
            title: 'Relatório',
            icon: 'piechart',
            action: () => navigation.navigate('report')
        },
    ]

    const scale = useRef(new Animated.Value(0)).current;

    function resizeBox(to: number){
        to === 1 && setVisible(true);
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear
        }).start(() => to === 0 && setVisible(false))
    }
    return (
        <Container>
            <ButtonMenu onPress={() => resizeBox(1)}>
                <Entypo name="menu" size={30} color="#FFFFFF" />

            </ButtonMenu>
            <Modal transparent visible={visible}>
                <SafeAreaView style={{ flex: 1}} onTouchStart={() => resizeBox(0)}>
                    <WrapperOptions>
                        {navigateOptions.map((op, index) => (
                            <Option onPress={op.action} key={index}>
                                <Text>{op.title}</Text>
                                <AntDesign name={op.icon as 'user' | 'piechart'} size={24} color="#1A75BB" />
                            </Option>
                        ))}
                    </WrapperOptions>
                </SafeAreaView>
            </Modal>
        </Container>
    )
}