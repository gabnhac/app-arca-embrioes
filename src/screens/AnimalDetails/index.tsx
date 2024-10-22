import CardAvatar from "@components/CardAvatar";
import { Container, Window, Header, TextInfo, BodyInfo } from "./styles";
import Input from "@components/Input/Input";

type Props = {
    raca: number;
    sexo: string;
    peso: number;
    brinco: number;
    nome: string;
}

export default function AnimalDetails({brinco, nome, peso, raca, sexo}: Props){
    return(
        <Container>
            <Window>
                <Header>
                    <CardAvatar
                        size="LARGE"
                        borderColor="#FFFFFF"
                        imgLocal="VACA"
                    />
                    <TextInfo>{nome}</TextInfo>
                </Header>
                <BodyInfo>

                </BodyInfo>
            </Window>
        </Container>
    )
}