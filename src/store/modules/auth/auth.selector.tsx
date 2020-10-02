import { IState } from 'store/constants';
import { IAuth } from 'store/modules/auth/auth.constant';

import { createSelector } from 'reselect';

export const authSelector = (state: IState) => {
  return state.auth;
};

export const hasLoginSelector = createSelector(
  authSelector,
  (auth: IAuth) => auth.hasLogin,
);

export const userSelector = createSelector(
  authSelector,
  (auth: IAuth): any => auth.user || {},
);
