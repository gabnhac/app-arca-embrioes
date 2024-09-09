import Button from "@components/Button";
import { Container, ImageBackground } from "./styles";
import BackgroundImg from "@assets/pastoBackground.jpg"

export default function(){
    return(
        <Container>
            <ImageBackground
                source={BackgroundImg}
                alt="Pessoas treinando"
            />
            <Button
                label="Próximo"
                colorType="PRIMARY"
            />
        </Container>
    )
}