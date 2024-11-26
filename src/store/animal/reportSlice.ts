import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimalType } from "@services/getAnimalsByOwner";
import { RootState } from "..";

type ReportState = {
  doadoras: AnimalType[];
  doadores: AnimalType[];
};

const initialState: ReportState = {
  doadoras: [],
  doadores: [],
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
  },
});

export const { setDoadorasRedux, setDoadoresRedux } = reportSlice.actions;

// Seletores
export const selectDoadorasRedux = (state: RootState): AnimalType[] =>
  state.report.doadoras;

export const selectDoadoresRedux = (state: RootState): AnimalType[] =>
  state.report.doadores;

export default reportSlice.reducer;
