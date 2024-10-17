import { Image, View } from "react-native";
import { Container, InfoText, WrapperImage, WrapperInfo, WrapperInfoTexts } from "./styles";
import Title from "@components/Title/Title";

type Props = {
    raca: string;
    peso: number;
    idade: number;
    brinco: string | number;
}
//padronizar as raças posssíveis com enum
//padronizar o brinco, que pode ser string | number
export default function CardAnimal({raca, peso, idade, brinco}: Props){
    return(
        <Container>
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
                    <View>
                        <InfoText>{idade} ANOS</InfoText>
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