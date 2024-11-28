import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimalType } from "@services/getAnimalsByOwner";
import { RootState } from "..";
import { SemenType } from "@services/getSemenByAnimal";
import { OocitoType } from "@services/getOocitoByAnimal";
import { EmbriaoType } from "@services/getEmbrioesByOwner";

type ReportState = {
  doadoras: AnimalType[];
  doadores: AnimalType[];
  racas: [];
  semenByDoadores: SemenType[];
  oocitoByDoadoras: OocitoType[];
  embrioes: EmbriaoType[];
};

const initialState: ReportState = {
  doadoras: [],
  doadores: [],
  racas: [],
  semenByDoadores: [],
  oocitoByDoadoras: [],
  embrioes: [],
};

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setDoadorasRedux: (state, { payload }: PayloadAction<AnimalType[]>) => {
      state.doadoras = payload;
    },
    setDoadoresRedux: (state, { payload }: PayloadAction<AnimalType[]>) => {
      state.doadores = payload;
    },
    setRacasRedux: (state, { payload }: PayloadAction<[]>) => {
      state.racas = payload;
    },
    setSemenByDoadoresRedux: (state, { payload }: PayloadAction<SemenType[]>) => {
      state.semenByDoadores = payload;
    },
    setOocitoByDoadorasRedux: (state, { payload }: PayloadAction<OocitoType[]>) => {
      state.oocitoByDoadoras = payload;
    },
    setEmbrioesRedux: (state, { payload }: PayloadAction<EmbriaoType[]>) => {
      state.embrioes = payload;
    },
  },
});

export const { setDoadorasRedux, setDoadoresRedux, setRacasRedux, 
  setOocitoByDoadorasRedux, setSemenByDoadoresRedux, setEmbrioesRedux } = reportSlice.actions;

// Seletores
export const selectDoadorasRedux = (state: RootState): AnimalType[] =>
  state.report.doadoras;

export const selectDoadoresRedux = (state: RootState): AnimalType[] =>
  state.report.doadores;

export const selectRacasRedux = (state: RootState): [] =>
  state.report.racas;

export const selectSemenByDoadoresRedux = (state: RootState): SemenType[] =>
  state.report.semenByDoadores;

export const selectOocitoByDoadorasRedux = (state: RootState): OocitoType[] =>
  state.report.oocitoByDoadoras;

export const selectEmbrioesRedux = (state: RootState): EmbriaoType[] =>
  state.report.embrioes;

export default reportSlice.reducer;
