import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

`;

export const ContainerContent = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
`;

export const WrapperForm = styled.View`
    width: 80%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

