import { Image, TouchableOpacityProps, View } from "react-native";
import { Container, InfoText, WrapperImage, WrapperInfo, WrapperInfoTexts } from "./styles";
import Title from "@components/Title/Title";

type Props = TouchableOpacityProps & {
    raca: string;
    peso: number;
    sexo: string;
    brinco: string | number;
}

export default function CardAnimal({ raca, peso, brinco, sexo, ...rest }: Props) {
    return (
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
                {sexo === 'M' || sexo === 'm' ?
                    <Image
                        source={require('@assets/boi.jpg')}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                    />
                    :
                    <Image
                        source={require('@assets/vaca.jpg')}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                    />

                }
            </WrapperImage>
        </Container>
    )
}