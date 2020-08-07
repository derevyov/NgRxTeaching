import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CreateArticleStateInterface} from "../types/createArticleState.interface";
import {AppStateInterface} from "../../shared/types/appState.interface";

export const createArticleFeatureSelector = createFeatureSelector<AppStateInterface, CreateArticleStateInterface
  >('createArticle');

export const createArticleIsSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const createArticleValidationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
);

