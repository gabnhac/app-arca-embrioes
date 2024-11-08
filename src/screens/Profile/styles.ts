import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
`;

export const WraperContent = styled.View`
    flex: 1;
    

    justify-content: center;
    align-items: center;
`;

export const WrapperHeader = styled.View`
    margin: 50px 0;

    justify-content: center;
    align-items: center;

    gap: 10px;

    `;

export const WrapperDate = styled.View`
    width: 80%;
    justify-content: center;
    align-items: center;

    `;

export const WrapperButton = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;



