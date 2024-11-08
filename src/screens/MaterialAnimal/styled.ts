import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};

`;

export const WrapperHeader = styled.View`
    width: 80%;
    align-items: center;
    gap: 25px;
`;

export const WrapperContent = styled.View`
    padding: 15px 0;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    gap: 30px
    
`;