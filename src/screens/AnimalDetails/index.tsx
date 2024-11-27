import { Container, Window, Header, TextInfo, BodyInfo, WrapperShortInfos, ShortInfo } from "./styles";

import CardAvatar from "@components/CardAvatar";
import Input from "@components/Input/Input";
import theme from '@theme/index';
import Title from "@components/Title/Title";

import { useDispatch, useSelector } from "react-redux";
import { animalSlice, selectAnimal } from "@store/animal/animalSlice";
import { setAnimal } from "@store/animal/animalSlice";
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";

import * as yup from 'yup';
import Select from "@components/Select";
import Button from "@components/Button";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { numberMask } from "@utils/numberMask";
import postAnimal from "@services/postAnimal";
import { useAuth } from "../../hooks/useAuth";
import Toast from "react-native-toast-message";
import { selectRacasRedux } from "@store/animal/reportSlice";

type FormDataProps = {
    nome: string;
    brinco: string;
    peso: string;
}

type SexoType = 'M' | 'F';
type RacaType = 'Angus' | 'Hereford';

export default function AnimalDetails() {
    const {user} = useAuth();
    const navigation = useNavigation<AppNavigatorRouteProps>();
    const style = theme;

    const [sexoSelected, setSexoSelected] = useState<SexoType>('M');
    const [racaSelected, setRacaSelected] = useState('1');

    const racas = useSelector(selectRacasRedux);
    
    const optionsSexo = ['M', 'F'];

    const { brinco, material, nome, peso, raca, sexo } = useSelector(selectAnimal);

    const isAdd = raca.length < 1;
    const dispatch = useDispatch();

    const registerAnimal = yup.object({
        brinco: yup.string().required('Informe o brinco'),
        nome: yup.string().required('Informe o nome'),
        peso: yup.string().required('Informe o peso'),
    });

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(registerAnimal),
    });

    function setSexo(sexo: SexoType) {
        setSexoSelected(sexo);
    }

    function getOptionsRaca(){
        return racas.map((item) => item.descricao)
    }

    function setOptionRaca(racaDescricao: string){
        const raca = racas.find((item) => item.descricao = racaDescricao);

        if(raca)
            setRacaSelected(raca?.cod_raca);
    }


    async function handleRegisterAnimal({brinco, nome, peso}: FormDataProps) {
        const response = await postAnimal({
            brinco: brinco,
            nome: nome,
            peso: Number(peso),
            sexo: sexoSelected,
            cod_raca: racaSelected,
            id_proprietario: user.id
        })

        if(response?.status === 200 ){
            Toast.show({
                type: 'success',
                text1: 'Animal cadastrado',
                position: 'bottom'
            })
        }else {
            Toast.show({
                type: 'error',
                text1: 'Falha no cadastro',
                text2: 'Tente mais tarde',
                position: 'bottom'
            })
        }
    }

    return (
        <Container>
            <BackOption
                onPress={() => {
                    dispatch(setAnimal({
                        brinco: '',
                        material: 0,
                        nome: '',
                        peso: 0,
                        raca: '',
                        sexo: '',
                    }))
                    navigation.goBack()
                }}
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
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30, justifyContent: 'center' }}>
                    <BodyInfo>
                        <Title
                            title="INFORMAÇÔES/MATERIAL"
                            typeFontSize={12}
                            typeColor="WHITE"
                            typeFontWeight="NORMAL"
                        />

                        {isAdd && <Controller
                            control={control}
                            name="nome"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Nome"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.nome?.message}
                                />
                            )}
                        />}


                        <Controller
                            control={control}
                            name="brinco"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Brinco"
                                    onChangeText={onChange}
                                    value={isAdd ? value : brinco}
                                    editable={isAdd}
                                    errorMessage={errors.brinco?.message}
                                />
                            )}
                        />

                        {isAdd ? <Select
                            label="Raça"
                            options={getOptionsRaca()}
                            setOption={setOptionRaca}
                            
                        />
                            :
                            <Input
                                label="Raça"
                                editable={false}
                                value={raca}
                            />
                        }
                        <WrapperShortInfos>
                            <ShortInfo>
                                {isAdd ?
                                    <Select
                                        options={optionsSexo}
                                        label="Sexo"
                                        setOption={setSexo}
                                    />
                                    :
                                    <Input
                                        label="Sexo"
                                        editable={false}
                                        value={sexo}
                                    />
                                }
                            </ShortInfo>
                            <ShortInfo>
                                {isAdd ? <Controller
                                    control={control}
                                    name="peso"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            label="Peso KG"
                                            onChangeText={(value) => {
                                                const pesoformt = numberMask(value)
                                                onChange(pesoformt)
                                            }}
                                            value={value}
                                            errorMessage={errors.peso?.message}
                                        />
                                    )}
                                />
                                    :
                                    <Input
                                        label="Peso KG"
                                        editable={false}
                                        value={peso.toString()}
                                    />
                                }
                            </ShortInfo>
                        </WrapperShortInfos>

                    </BodyInfo>
                    {isAdd && <Button
                        onPress={handleSubmit(handleRegisterAnimal)}
                        style={{ alignSelf: 'center', marginTop: 7 }}
                        label="Cadastrar"
                        colorType="SECONDARY"
                    />}
                </ScrollView>
            </Window>
        </Container>
    )
}
