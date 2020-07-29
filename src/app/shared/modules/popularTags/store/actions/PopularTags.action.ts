import {ActionTypes} from "../actionTypes";
import {createAction, props} from "@ngrx/store";
import {PopularTagType} from "../../../../types/PopularTag.type";

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS, props<{ url: string }>());

export const getPopularTagsSuccessAction =
  createAction(ActionTypes.GET_POPULAR_TAGS_SUCCESS, props<{ popularTags: PopularTagType[] }>());

export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE);


