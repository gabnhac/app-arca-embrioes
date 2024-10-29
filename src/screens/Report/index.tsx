import React, { useState } from "react";
import { Container, WrapperBody, WrapperStockCards, WrapperTitle } from "./styles";
import Title from "@components/Title/Title";
import CardStock from "@components/CardStock";
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";


export default function Report() {
    const navigation = useNavigation<AppNavigatorRouteProps>()

    const [countEmbrioes, setCountEmbrioes] = useState(0);
    const [countOocitos, setCountOocitos] = useState(0);
    const [countSemen, setCountSemen] = useState(0);
    return (
        <Container>
            <BackOption 
                onPress={() => navigation.goBack()}
            />
            <WrapperTitle>
                <Title
                    title="Estoque"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
            </WrapperTitle>

            <WrapperBody>
                <CardStock
                    color="LIGHT_BLUE"
                    borderRadius="FULL"
                    count={10}
                    description="Total Embriões"
                    size="LARGE"
                />
                <WrapperStockCards>
                    <CardStock
                        color="ROYAL_BLUE"
                        borderRadius="PARTIAL"
                        count={10}
                        description="Total Semen"
                        size="MEDIUM"
                    />
                    <CardStock
                        color="DARK_BLUE"
                        borderRadius="PARTIAL"
                        count={10}
                        description="Total Oócitos"
                        size="MEDIUM"
                    />
                </WrapperStockCards>
            </WrapperBody>


        </Container>
    )
}