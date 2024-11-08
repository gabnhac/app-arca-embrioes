import CardAvatar from "@components/CardAvatar";
import { Container, TextInfo, TextRaca, WrapperInfo, WrapperInfoQtd, WrapperInfoText } from "./styles";

type Props = {
    raca: string;
    tipoMaterial?: string,
    qtd: number;
    brinco: string
}

export default function CardMaterialAnimal({brinco, qtd, raca, tipoMaterial}: Props){
    return(
        <Container>
            <CardAvatar
                size="SMALL"
                borderColor="#FFFFFF"
                imgLocal="VACA"
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