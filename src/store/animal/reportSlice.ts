import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimalType } from "@services/getAnimalsByOwner";
import { RootState } from "..";
import { RacaType } from "@services/getRacas";

type ReportState = {
  doadoras: AnimalType[];
  doadores: AnimalType[];
  racas: RacaType[];
};

const initialState: ReportState = {
  doadoras: [],
  doadores: [],
  racas: []
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
    setRacasRedux: (state, { payload }: PayloadAction<RacaType[]>) => {
      state.racas = payload;
    },
  },
});

export const { setDoadorasRedux, setDoadoresRedux, setRacasRedux } = reportSlice.actions;

// Seletores
export const selectDoadorasRedux = (state: RootState): AnimalType[] =>
  state.report.doadoras;

export const selectDoadoresRedux = (state: RootState): AnimalType[] =>
  state.report.doadores;

export const selectRacasRedux = (state: RootState): RacaType[] =>
  state.report.racas;

export default reportSlice.reducer;
