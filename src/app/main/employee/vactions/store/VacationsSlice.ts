import { createSlice, WithSlice } from "@reduxjs/toolkit"
import { rootReducer } from "app/store/lazyLoadedSlices"

const initialState = {
  total: 27.0,
  used: 1.0
}

export const VacationsAppSlice = createSlice({
  name: 'vacationsApp',
  initialState,
  reducers: {
    addUsed: (state, action) => {
      state.used += action.payload
    }
  },
  selectors: {
    selectVacations: (state) => state
  }
})

// rootReducer에 vacationsAppSlice를 등록
rootReducer.inject(VacationsAppSlice);
// VacationsAppSlice에 역으로 rootReducer를 등록
const injectedSlice = VacationsAppSlice.injectInto(rootReducer);
// lazy에 VacationsAppSlice를 등록
declare module 'app/store/lazyLoadedSlices' {
  export interface lazyLoadedSlices extends WithSlice<typeof VacationsAppSlice> { }
}
// VacationsAppSlice에 action지정
export const {addUsed} = VacationsAppSlice.actions;
// VacationSliceType에 VacationsAppclice를 타입으로 지정
export type VacationSliceType = typeof VacationsAppSlice;
// selectVacations을 등록
export const { selectVacations } = injectedSlice.selectors;
// vacationsReducer로 vacationsAppslice의 reducer를 사용 등록
export const vacationsReducer = VacationsAppSlice.reducer;