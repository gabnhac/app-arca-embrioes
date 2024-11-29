import Title from "@components/Title/Title";
import { Container, WrapperContent, WrapperFlatList } from "./styles";
import { FlatList } from "react-native";
import CardInfoMaterial from "@components/CardInfoMaterial";
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectDoadorasRedux, selectDoadoresRedux, selectEmbrioesRedux } from "@store/animal/reportSlice";
import { useEffect, useState } from "react";
import ModalEditEmbriao from "@components/ModalEditEmbriao";
import getEmbrioesByOwner from "@services/getEmbrioesByOwner";
import { useAuth } from "../../hooks/useAuth";
import Loading from "@components/Loading";

type EmbriaoTypeFormat = {
    macho: string,
    femea: string,
    dataFecundacao: string,
    dataCongelamento: string,
    dataDescongelamento: string,
    id_embriao: number
}

export default function MaterialDetails() {
    const navigation = useNavigation();
    const { user } = useAuth();

    const doadoresRedux = useSelector(selectDoadoresRedux);
    const doadorasRedux = useSelector(selectDoadorasRedux);

    const [visibleModal, setVisibleModal] = useState(false);
    const [embrioes, setEmbrioes] = useState<EmbriaoTypeFormat[]>([]);
    const [dataCongelamento, setDataCongelamento] = useState(new Date());
    const [idAnimalEdit, setIdAnimalEdit] = useState(0);
    const [reloadScreen, setReloadScreen] = useState(0);
    const [loading, setLoading] = useState(true); // Inicialize como true

    function limitador(brinco: string | undefined) {
        if (!brinco) return '...';
        return brinco.length > 4 ? `${brinco.slice(0, 4)}..` : brinco;
    }

    function onCloseModal() {
        setVisibleModal(false);
        setReloadScreen((prev) => prev + 1); // Recarregar a tela após fechar o modal
    }

    function formatDate(date: Date | null) {
        if (!date) return "Não";
        const parsedDate = new Date(date);
        const day = String(parsedDate.getDate()).padStart(2, '0');
        const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
        const year = String(parsedDate.getFullYear());
        return `${day}/${month}/${year}`;
    }

    async function buildMaterialEmbrioes() {
        setLoading(true); // Inicia o carregamento
        const response = await getEmbrioesByOwner(user.id);

        if (!response || response.length < 1) {
            setEmbrioes([]); // Limpa os embriões se não houver resposta
            setLoading(false); // Finaliza o carregamento
            return;
        }

        const newEmbrioes: EmbriaoTypeFormat[] = response.map((embriao) => {
            const doador = doadoresRedux.find((item) => item.id_animal === Number(embriao.id_macho));
            const doadora = doadorasRedux.find((item) => item.id_animal === Number(embriao.id_femea));

            if (doador && doadora) {
                return {
                    macho: limitador(doador.brinco),
                    femea: limitador(doadora.brinco),
                    dataFecundacao: formatDate(new Date(embriao.data_fecundacao)),
                    dataCongelamento: formatDate(new Date(embriao.data_congelamento)),
                    dataDescongelamento: formatDate(embriao.data_descongelamento ? new Date(embriao.data_descongelamento) : null),
                    id_embriao: embriao.cod_embriao,
                };
            }
            return null;
        }).filter((item) => item !== null) as EmbriaoTypeFormat[];

        setEmbrioes(newEmbrioes);
        setLoading(false); // Finaliza o carregamento após processar os dados
    }

    useEffect(() => {
        buildMaterialEmbrioes();
    }, [reloadScreen]); // Recarrega quando `reloadScreen` muda

    return (
        <Container>
            <BackOption onPress={() => navigation.goBack()} />
            <ModalEditEmbriao
                visible={visibleModal}
                onClose={onCloseModal}
                dataCongelamento={dataCongelamento}
                transparent={true}
                animationType="fade"
                idEmbriao={idAnimalEdit}
            />

            <WrapperContent>
                <Title title="Embriões" typeFontSize={25} typeFontWeight="BOLD" />
                <WrapperFlatList>
                    <CardInfoMaterial
                        macho="M"
                        femea="F"
                        dataFecundacao="COLETA"
                        dataCongelamento="CONGELA"
                        dataDescongelamento="DESCONGELA"
                        disabled
                    />
                    {loading ? (
                        <Loading />
                    ) : (
                        <FlatList
                            data={embrioes}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ gap: 15 }}
                            renderItem={({ item }) => (
                                <CardInfoMaterial
                                    macho={item.macho}
                                    femea={item.femea}
                                    dataFecundacao={item.dataFecundacao}
                                    dataCongelamento={item.dataCongelamento}
                                    dataDescongelamento={item.dataDescongelamento}
                                    disabled={!(item.dataDescongelamento === 'Não')}
                                    onPress={() => {
                                        setVisibleModal(true);
                                        const [day, month, year] = item.dataCongelamento.split('/');
                                        setDataCongelamento(new Date(Number(year), Number(month) - 1, Number(day)));
                                        setIdAnimalEdit(item.id_embriao);
                                    }}
                                />
                            )}
                        />
                    )}
                </WrapperFlatList>
            </WrapperContent>
        </Container>
    );
}
