import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { type animalState } from "./types";

const initialState = {
    raca: '',
    idade: 0,
    peso: 0,
    brinco: "",
    sexo: '',
    nome: '',
    material: 0,
} as animalState;

export const animalSlice = createSlice({
    name: 'animal',

    initialState,

    reducers: {
        setRaca: (state, { payload }: PayloadAction<string>) => {
            state.raca = payload;
        },
        setIdade: (state, { payload }: PayloadAction<number>) => {
            state.idade = payload;
        },
        setPeso: (state, { payload }: PayloadAction<number>) => {
            state.peso = payload;
        },
        setBrinco: (state, { payload }: PayloadAction<string>) => {
            state.brinco = payload;
        },
        setSexo: (state, { payload }: PayloadAction<string>) => {
            state.sexo = payload;
        },
        setMaterial: (state, { payload }: PayloadAction<number>) => {
            state.material = payload;
        },
        setNome: (state, { payload }: PayloadAction<string>) => {
            state.nome = payload;
        },
        setAnimal: (state, { payload }: PayloadAction<animalState>) => {
            return {
                ...state,
                ...payload,
            }
        },
    }
});

export const {
    setAnimal,
    setBrinco,
    setIdade,
    setMaterial,
    setNome,
    setPeso,
    setRaca,
    setSexo,

} = animalSlice.actions;

export const selectAnimal = ({ animal }: RootState): animalState => {
    return animal;
};

export default animalSlice.reducer;