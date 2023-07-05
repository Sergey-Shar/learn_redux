import { CreateErrorAction, CreateOrderAction, CreateOrderResetAction, CreateOrderSuccessAction } from ".";
import { DecreaseQuantityAction, IncreaseQuantityAction } from "./productActions";

export type ProjectActions =
	| IncreaseQuantityAction
	| DecreaseQuantityAction
	| CreateOrderAction
 | CreateOrderSuccessAction
 | CreateErrorAction
 | CreateOrderResetAction
