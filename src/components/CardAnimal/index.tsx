import { Image, TouchableOpacityProps, View } from "react-native";
import { Container, InfoText, WrapperImage, WrapperInfo, WrapperInfoTexts } from "./styles";
import Title from "@components/Title/Title";

type Props = TouchableOpacityProps & {
    raca: string;
    peso: number;
    brinco: string | number;
}
//padronizar as raças posssíveis com enum
//padronizar o brinco, que pode ser string | number
export default function CardAnimal({raca, peso, brinco, ...rest}: Props){
    return(
        <Container
            {...rest}
        >
            <WrapperInfo>
                <Title
                    title={raca}
                    typeFontSize={13}
                    typeFontWeight="BOLD"
                />

                <WrapperInfoTexts>
                    <View>
                        <InfoText>{peso}KG</InfoText>
                    </View>
                    <InfoText>#{brinco}</InfoText>
                </WrapperInfoTexts>
            </WrapperInfo>

            <WrapperImage>
                <Image
                    source={require('@assets/vaca.jpg')}
                    style={{width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 10, borderBottomRightRadius: 10}}
                />
            </WrapperImage>
        </Container>
    )
}