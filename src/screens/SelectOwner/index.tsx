import CardOwner from "@components/CardOwner";
import { Container, Content, WrapperTitle } from "./styles";
import { Dimensions, FlatList, Image } from "react-native";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";

export default function SelectOwner() {
    const { height, width } = Dimensions.get('screen');

    const dummyData = [
        {
            name: 'São Jozino',
            cnpj: 12334567895431
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
        {
            name: 'Baburu',
            cnpj: 12334567895076
        },
    ]

    return (
        <Container>
            <Image
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    flex: 1,
                }}
                source={BackgroundImg}
                alt="Gado no pasto"
            />


            <WrapperTitle>
                <Title
                    title="Escolha o proprietário"
                    typeFontSize={25}
                    typeColor="VIOLET"
                    typeFontWeight="BOLD"
                />
            </WrapperTitle>
            <Content>
                <FlatList
                    data={dummyData}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 15
                    }}
                    renderItem={({ item, index }) => (
                        <CardOwner
                            key={index}
                            name={item.name}
                            cnpj={item.cnpj}
                        />
                    )}
                />
            </Content>

        </Container>
    )
}