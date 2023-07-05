import { RootState } from "..";

export const confirmedSelector = (state: RootState):boolean =>  state.order.isConfirmed
export const isLoadingSelector = (state: RootState):boolean => state.order.isLoading
export const isErrorSelector = (state: RootState):boolean => state.order.isError
export const errorMessageSelector = (state: RootState): string => state.order.errorMessage