import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};

`;

export const WrapperTitle = styled.View`

    align-items: center;
    margin: 40px 0 0 0;
`;

export const WrapperContent = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const WrapperFlatList = styled.View`
    width: 80%;
    height: 50%;
    background-color: ${({theme}) => theme.COLORS.SOFT_VIOLET};
    padding: 20px;

    border-radius: 10px;
`;


