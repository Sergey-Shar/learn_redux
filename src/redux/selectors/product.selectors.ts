import { RootState } from "..";
import { IProduct } from "../../shared/types/product.types";

export const productsSelector = (state: RootState): IProduct[] => state.products
