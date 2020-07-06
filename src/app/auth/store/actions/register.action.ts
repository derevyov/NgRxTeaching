import {ActionTypes} from "../actionTypes";
import {createAction, props} from '@ngrx/store';
import {RegisterRequestInterface} from "../../types/registerRequest.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>())
