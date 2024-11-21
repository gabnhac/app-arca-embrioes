import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

`;

export const Content = styled.View`
    width: 100%;
    height: 70%;
    margin: 15px 0;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const WrapperTitle = styled.View`
    margin: 40px 0;
    align-items: center;
`;

export const WrapperAddOwner = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const EmptyList = styled.View`
    justify-content: center;
    align-items: center;
`;

export const TextEmptyList = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 15px;
    color: #FFFFFF;
`;

export const WrapperTouchableReload = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
