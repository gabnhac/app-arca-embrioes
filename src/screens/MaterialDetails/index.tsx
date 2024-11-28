import Title from "@components/Title/Title";
import { Container, WrapperContent, WrapperFlatList, WrapperTitle } from "./styles";
import { FlatList, View } from "react-native";
import CardInfoMaterial from "@components/CardInfoMaterial";
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectDoadorasRedux, selectDoadoresRedux, selectEmbrioesRedux } from "@store/animal/reportSlice";
import { useEffect, useState } from "react";

type EmbriaoTypeFormat = {
    macho: string,
    femea: string,
    dataFecundacao: string,
    dataCongelamento: string,
    dataDescongelamento: string
}

export default function MaterialDetails() {
    const navigation = useNavigation();
    
    const embrioesRedux = useSelector(selectEmbrioesRedux);
    const doadoresRedux = useSelector(selectDoadoresRedux);
    const doadorasRedux = useSelector(selectDoadorasRedux);

    const [embrioes, setEmbrioes] = useState<EmbriaoTypeFormat[]>([]);
    
    console.log('EMBRIOES', embrioes);

    function limitador(brinco: string | undefined) {
        if (!brinco) return '...'; 

        if(brinco.length > 4)
            return brinco.slice(0, 4) + '..';

        return brinco;
    }

    function formatDate(date: Date){
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        return `${day}/${month}/${year}`
    }

    function buildMaterialEmbrioes() {
        for (const embriao of embrioesRedux) {
            const doador = doadoresRedux.find((item) => item.id_animal === Number(embriao.id_macho));
            const doadora = doadorasRedux.find((item) => item.id_animal === Number(embriao.id_femea));
            
            if (doador && doadora) {
                setEmbrioes((prev) => [
                    ...prev,
                    {
                        macho: limitador(doador.brinco),
                        femea: limitador(doadora.brinco),
                        dataFecundacao: formatDate(new Date(embriao.data_fecundacao)),
                        dataCongelamento: formatDate(new Date(embriao.data_congelamento)),
                        dataDescongelamento: formatDate(new Date(embriao.data_descongelamento)),
                    },
                ]);
            }
        }
    }
    
    

    useEffect(() => {
        buildMaterialEmbrioes();
    }, [])

    return (
        <Container>
            <BackOption
                onPress={() => navigation.goBack()}
            />

            <WrapperContent>
                <Title
                    title="Embriões"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
                <WrapperFlatList>
                    <CardInfoMaterial
                        macho={'M'}
                        femea={'F'}
                        dataFecundacao={'FEC.'}
                        dataCongelamento={'CONG'}
                        dataDescongelamento={'DESCON.'}
                    />
                    <FlatList
                        data={embrioes}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            gap: 15
                        }}
                        renderItem={({ item, index }) => (
                            <CardInfoMaterial
                                macho={item.macho}
                                femea={item.femea}
                                dataFecundacao={item.dataFecundacao}
                                dataCongelamento={item.dataCongelamento}
                                dataDescongelamento={item.dataDescongelamento}
                            />
                        )}
                    />
                </WrapperFlatList>

            </WrapperContent>

        </Container>
    )
}