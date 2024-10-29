import { Container, Window, Header, TextInfo, BodyInfo, WrapperShortInfos, ShortInfo } from "./styles";

import CardAvatar from "@components/CardAvatar";
import Input from "@components/Input/Input";
import theme from '@theme/index';
import Title from "@components/Title/Title";

import { useSelector } from "react-redux";
import { selectAnimal } from "@store/animal/animalSlice";
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

export default function AnimalDetails(){
    const navigation = useNavigation<AppNavigatorRouteProps>();
    const style = theme;

    const {brinco, idade, material, nome, peso, raca, sexo} = useSelector(selectAnimal);


    return(
        <Container>
            <BackOption
                onPress={() => navigation.goBack()}
            />
            <Window>
                <Header>
                    <CardAvatar
                        size="LARGE"
                        borderColor={style.COLORS.FRENCH_BLUE}
                        imgLocal="VACA"
                    />
                    <TextInfo>{nome}</TextInfo>
                </Header>
                <BodyInfo>
                    <Title
                        title="INFORMAÇÔES/MATERIAL"
                        typeFontSize={12}
                        typeColor="WHITE"
                        typeFontWeight="NORMAL"
                    />
                    <Input
                        label="Raça"
                        value={raca}
                    />
                    <Input
                        label="Brinco"
                        value={brinco}
                    />
                    <WrapperShortInfos>
                        <ShortInfo style={{width: '45%'}}>
                            <Input
                                label="Sexo"
                                value={sexo}
                            />
                        </ShortInfo>
                        <ShortInfo style={{width: '45%'}}>
                            <Input
                                label="Peso (KG)"
                                value={peso.toString()}
                            />
                        </ShortInfo>
                        <ShortInfo style={{width: '45%', alignSelf: 'center'}}>
                            <Input
                                label="Idade (ANOS)"
                                value={idade.toString()}
                            />
                        </ShortInfo>
                        <ShortInfo style={{width: '45%', alignSelf: 'center'}}>
                            <Input
                                label={sexo === 'M' ? 'Semen (2ml cada)' : 'Oócitos'}
                                value={material.toString()}
                            />
                        </ShortInfo>
                    </WrapperShortInfos>
                </BodyInfo>
            </Window>
        </Container>
    )
}