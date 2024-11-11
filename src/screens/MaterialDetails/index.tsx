import Title from "@components/Title/Title";
import { Container, WrapperContent, WrapperFlatList, WrapperTitle } from "./styles";
import { FlatList } from "react-native";
import CardInfoMaterial from "@components/CardInfoMaterial";

export default function MaterialDetails() {
    const dummyData = [
        {
            id: '1',
            data: '13/09/2024',
            status: 'Disponível'
        },
        {
            id: '2',
            data: '13/09/2024',
            status: 'Disponível'
        },
        {
            id: '3',
            data: '13/09/2024',
            status: 'Disponível'
        },
        {
            id: '4',
            data: '13/09/2024',
            status: 'Disponível'
        },
        {
            id: '5',
            data: '13/09/2024',
            status: 'Disponível'
        },
        {
            id: '7',
            data: '13/09/2024',
            status: 'Disponível'
        },
        {
            id: '8',
            data: '13/09/2024',
            status: 'Disponível'
        },

    ]

    const labelTabela = {
        id: 'ID',
        data: 'DATA',
        status: 'STATUS'
    }

    const finalData = [labelTabela, ...dummyData];
    return (
        <Container>
            <WrapperContent>
                <Title
                    title="Embriões Vaca #16HI"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
                <WrapperFlatList>
                    <FlatList
                        data={finalData}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10
                        }}
                        renderItem={({ item, index }) => (
                            <CardInfoMaterial
                                key={index}
                                data={item.data}
                                id={item.id}
                                status={item.status}
                            />
                        )}
                    />
                </WrapperFlatList>

            </WrapperContent>

        </Container>
    )
}