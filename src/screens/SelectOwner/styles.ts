import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

`;

export const Content = styled.View`
    flex: 1;
    margin: 15px 0;
    align-items: center;
    justify-content: center;
`;

export const WrapperTitle = styled.View`
    margin: 40px 0;
    align-items: center;
`;
