import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EditArticleStateInterface} from "../types/editArticleState.interface";
import {AppStateInterface} from "../../shared/types/appState.interface";

export const editArticleFeatureSelector = createFeatureSelector<AppStateInterface, EditArticleStateInterface
  >('editArticle');

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const ValidationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.validationErrors
);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);

