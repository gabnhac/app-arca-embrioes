import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "@theme/index";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.FRENCH_GRAY};
 
`;

export const Header = styled.View`
    height: 30%;
    width: 100%;

    align-items: center;
    justify-content: space-around;
    gap: 10px;
`;

export const Categories = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;

export const WrapperTitle = styled.View`
    align-self: flex-start;
    margin: 0 0 10px 30px;
`;

export const Animals = styled.View`
    flex: 1;
    align-items: center;


    gap: 20px;
`;

export const AnimalList = styled.View`
    width: 100%;

    align-items: center;

`;

export const WrapperTouchable = styled(TouchableOpacity)`

`;


export const EmptyList = styled.View`
    justify-content: center;
    align-items: center;
`;

export const TextEmptyList = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BODY};
    font-size: 15px;
    color: #FFFFFF;
`;

export const AddButton = styled.TouchableOpacity`
    padding-bottom: 15px;

    align-items: center;
    justify-content: center;
`;

export const ReloadText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 16px;
`;

