import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    align-self: flex-end;
`;

export const ButtonMenu = styled(TouchableOpacity)`
    
`;

export const WrapperOptions = styled(Animated.View)`
    width: 50%;
    border-width: 1px;
    border-color: #333;
    background-color: #FFF;
    padding: 0 10px;
    position: absolute;
    top: 60px;
    right: 20px;
`;

export const Option = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;
    border-bottom-color: #ccc;
    border-bottom-width: 1px;
    gap: 10px;
`;
