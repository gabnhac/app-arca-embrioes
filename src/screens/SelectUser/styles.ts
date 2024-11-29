import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const Option = styled(TouchableOpacity)`
    width: 170px;
    height: 100px;
    background-color: #FFFFFF;

    align-items: center;
    justify-content: center;

    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TextOption = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
    font-size: 15px;
    font-weight: 700;
`;

export const WrapperTitle = styled.View`
    align-items: center;
    margin: 50px 0 0 0;
`;

export const WrapperContent = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
    gap: 20px;
`;