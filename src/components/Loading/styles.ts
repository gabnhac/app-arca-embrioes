import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const LoadingActivity = styled(ActivityIndicator).attrs(({theme}) => ({
    size: 50,
    color: '#FFFFFF'
}))``;