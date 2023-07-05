import { Middleware } from "redux";
import { RootState } from "../store/store";
import { ProjectActions } from "../actions/typesActions";

export const logsActionMiddleware:Middleware< object, RootState> = () => 
 next => 
 (action: ProjectActions) => {
 console.log(action.type);
 next(action)
 }
