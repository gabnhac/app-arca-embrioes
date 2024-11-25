import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;


    margin-bottom: 10px;
`;

export const SelectContent = styled(TouchableOpacity)`
    flex-direction: row;
    height: 35px;
    border-radius: 5px;
    padding: 0 5px;
    background-color: ${({ theme }) => theme.COLORS.FRENCH_GRAY};

    align-items: center;
    justify-content: space-between;

`;

export const InitialText = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BODY};
    color: black;
    font-size: 15px;
`;

export const Label = styled.Text`
    color: white;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BODY};

`;

export const WrapperOptions = styled(Animated.View)`
  position: absolute;
  z-index: 100; 
  background-color: ${({ theme }) => theme.COLORS.FRENCH_GRAY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100%;
`;

export const Option = styled(TouchableOpacity)`
    width: 100%;

`;

export const OptionText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BODY};
    color: #000000;
    font-size: 18px;
    text-align: center;
`;