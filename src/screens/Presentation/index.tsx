import Button from "@components/Button";
import { Container, Footer, Header, ImageBackground, TextPresentation } from "./styles";
import BackgroundImg from "@assets/pastoBackground.jpg"
import { CardLogoPresentation } from "@components/CardLogoPresentation/CardLogoPresentation";

export default function Presentation(){
    return(
        <Container>
            <ImageBackground
                source={BackgroundImg}
                alt="Gado no pasto"
            />
            <Header><CardLogoPresentation/></Header>

            <Footer>
                <TextPresentation>Plataforma criada com novo modo de monitorar seu material genético bovino</TextPresentation>
                <Button
                    label="Próximo"
                    colorType="PRIMARY"
                />
            </Footer>
        </Container>
    )
}