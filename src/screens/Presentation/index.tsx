import Button from "@components/Button";
import { Container, ImageBackground } from "./styles";
import BackgroundImg from "@assets/pastoBackground.jpg"
import CardAvatar from "@components/CardAvatar";

export default function Presentation(){
    return(
        <Container>
            <ImageBackground
                source={BackgroundImg}
                alt="Pessoas treinando"
            />
            <CardAvatar
                size="LARGE"
                img="https://github.com/gabnhac.png"
                borderColor="#1A75BB"
            />

            <Button
                label="Próximo"
                colorType="PRIMARY"
            />
        </Container>
    )
}