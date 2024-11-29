import CardAvatar from "@components/CardAvatar";
import { Container, TextInfo, TextRaca, WrapperInfo, WrapperInfoQtd, WrapperInfoText } from "./styles";

type Props = {
    raca: string;
    qtd: number;
    brinco: string
    sexo: string;
}

export default function CardMaterialAnimal({brinco, qtd, raca, sexo}: Props){
    return(
        <Container>
            <CardAvatar
                size="SMALL"
                borderColor="#FFFFFF"
                imgLocal={sexo === 'M' || sexo === 'm' ? "BOI" : 'VACA'}
            />
            <WrapperInfo>
                <WrapperInfoText>
                    <TextRaca>{raca}</TextRaca>
                    <TextInfo>#{brinco}</TextInfo>
                </WrapperInfoText>
                <WrapperInfoQtd>
                    <TextInfo>{qtd}</TextInfo>
                </WrapperInfoQtd>
            </WrapperInfo>
        </Container>
    )
}