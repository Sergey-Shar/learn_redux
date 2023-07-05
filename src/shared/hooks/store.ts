import { useStore } from "react-redux";
import { RootState } from "../../redux/store/store";

export const useAppStore = useStore<RootState>