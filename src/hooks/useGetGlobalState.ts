import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "typescript/types/RootState";

export const useGlobalState: TypedUseSelectorHook<RootState> = useSelector;
