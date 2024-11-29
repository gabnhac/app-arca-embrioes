import Title from "@components/Title/Title";
import { Container, WrapperContent, WrapperHeader } from "./styled";
import CardSearch from "@components/CardSearch";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "@routes/app.routes";
import BackOption from "@components/BackOption";
import CardMaterialAnimal from "@components/CardMaterialAnimal";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDoadorasRedux, selectDoadoresRedux, selectOocitoByDoadorasRedux, selectRacasRedux, selectSemenByDoadoresRedux } from "@store/animal/reportSlice";

type MaterialAnimalRouteParams = RouteProp<AppRoutes, 'material_animal'>;

type MaterialAnimalType = {
    raca: string;
    brinco: string;
    qtd: number;
}

export default function MaterialAnimal({ route }: { route: MaterialAnimalRouteParams }) {
    const { materialName } = route.params;
    const navigation = useNavigation();

    const doadores = useSelector(selectDoadoresRedux);
    const doadoras = useSelector(selectDoadorasRedux);
    const materialDoadoras = useSelector(selectOocitoByDoadorasRedux);
    const materialDoadores = useSelector(selectSemenByDoadoresRedux);

    const racas = useSelector(selectRacasRedux);

    const [materialAnimal, setMaterialAnimal] = useState<MaterialAnimalType[]>();

    function searchByRaca(input: string) {
        if (!materialAnimal) return; 

        if(input.length === 0){
            defineTypeMaterialAnimal();
            return;
        }

        const searchQuery = input.toLowerCase();

        const search = materialAnimal.filter(element => 
            element.brinco.toLowerCase().includes(searchQuery) ||
            element.raca.toLowerCase().includes(searchQuery)
        );
    
    
        if (search.length > 0) {
            setMaterialAnimal(search);
        } else {
            setMaterialAnimal([]);  
        }
    }

    function defineRacaAnimals(idRaca: string) {
        const RacaName = racas?.find((item) => item.cod_raca === idRaca.toLowerCase())?.descricao

        if(RacaName){
            return RacaName
        }

        return 'Sem Raça'
    }
    
    function defineTypeMaterialAnimal() {
        let newMaterialAnimal: MaterialAnimalType[] = [];
        if (materialName === 'Semens') {
            for (const materialAnimal of materialDoadores) {
                const doador = doadores.find((item) => item.id_animal === materialAnimal.id_animal)
                if (doador) {
                    const doadorExistsIndex = newMaterialAnimal.findIndex((item) => item.brinco === doador.brinco);
                    if (doadorExistsIndex === -1) {
                        newMaterialAnimal.push({
                            brinco: doador.brinco,
                            raca: doador.cod_raca,
                            qtd: materialAnimal.Quantidade
                        });
                    } else {
                        newMaterialAnimal[doadorExistsIndex].qtd += materialAnimal.Quantidade;
                    }

                }

            }
        } else {
            for (const materialAnimal of materialDoadoras) {
                const doadora = doadoras.find((item) => item.id_animal === materialAnimal.id_animal)
                if (doadora) {
                    const doadoraExistsIndex = newMaterialAnimal.findIndex((item) => item.brinco === doadora.brinco);
                    if (doadoraExistsIndex === -1) {
                        newMaterialAnimal.push({
                            brinco: doadora.brinco,
                            raca: doadora.cod_raca,
                            qtd: materialAnimal.Quantidade
                        });
                    } else {
                        newMaterialAnimal[doadoraExistsIndex].qtd += materialAnimal.Quantidade;
                    }

                }

            }
        }
        setMaterialAnimal(newMaterialAnimal);
    }

    useEffect(() => {
        defineTypeMaterialAnimal();
        
    }, [])
    console.log('Semen', materialDoadores);
    console.log('Oocito', materialDoadoras);

    console.log('Materiais por animal', materialAnimal)
    return (
        <Container>
            <BackOption
                onPress={() => navigation.goBack()}
            />
            <WrapperHeader>
                <Title
                    title="Estoque"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
                <CardSearch
                    placeholder="Pesquise por raça ou brinco"
                    onChangeText={(text) => {
                        defineTypeMaterialAnimal();
                        searchByRaca(text); 
                    }}
                />
                <Title
                    title={materialName}
                    typeFontSize={20}
                    typeFontWeight="BOLD"
                />
            </WrapperHeader>


            <FlatList
                data={materialAnimal}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={{
                    gap: 25
                }}
                contentContainerStyle={{
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 25

                }}
                renderItem={({ item, index }) => (
                    <CardMaterialAnimal
                        key={index}
                        brinco={item.brinco}
                        qtd={item.qtd}
                        raca={defineRacaAnimals(item.raca)}
                    />

                )}
            />



        </Container>
    )
}