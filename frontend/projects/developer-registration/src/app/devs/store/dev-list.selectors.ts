import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from './dev-list.reducer';

const devListSelector = createFeatureSelector<fromStore.DevInfoState>(fromStore.devListFeatureKey);

export const devList = createSelector(devListSelector, fromStore.selectAll);
export const isLoading = createSelector(devListSelector, fromStore.selectIsLoading);
