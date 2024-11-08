import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
    align-items: center;

`;

export const Header = styled.View`
    height: 33%;
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

    padding: 15px;
`;

export const WrapperTitle = styled.View`
    align-self: flex-start;
    margin-left: 20px;
`;

export const WrapperTouchable = styled(TouchableOpacity)`

`;

export const Animals = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;