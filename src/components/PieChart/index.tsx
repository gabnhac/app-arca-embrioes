import { VictoryPie, VictoryTheme, VictoryLabel } from "victory-native";

type OptionType = {
    x: string,
    y: number,
    color: string // Cor personalizada opcional
}

type Props = {
    options: OptionType[];
}

export default function PieChart({ options }: Props) {
    return (
        <VictoryPie
            data={options}
            width={450}
            height={450}

            style={{
                data: {
                    fill: ({ datum }) => datum.color, 
                    stroke: "#fff",
                    strokeWidth: 1,
                },
                labels: {
                    fontSize: 18, 
                    fill: "#FFFFFF",
                    fontWeight: "bold",
                },
            }}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            labelRadius={100}
            padding={135}
        />
    );
}
