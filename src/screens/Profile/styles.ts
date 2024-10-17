import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
`;

export const WrapperHeader = styled.View`
    margin: 40px 0;

    justify-content: flex-end;
    align-items: center;

    `;

export const WrapperAvatar = styled.View`
    margin-Top: 25px;
    position: relative;
`;

export const EditImgButton = styled.TouchableOpacity`
    width: 45px;
    height: 45px;

    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
    border: 1.5px solid #FFFFFF;
    border-radius: 30px;
    
    opacity: 0.7;

    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 2px;
    right: 2px;
`;

export const WrapperDate = styled.View`
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;

    `;

export const WrapperButton = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;



