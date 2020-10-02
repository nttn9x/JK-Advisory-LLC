import { call, put, takeLatest } from "redux-saga/effects";

import { Types } from "./organization-list.constant";

import { setData } from "./organization-list.action";

import { getAllOrganization } from "services/organizations.service";

function* watchLoadData({ payload: { params } }: any) {
  try {
    const res = yield call(getAllOrganization, params);
    yield put(setData(res));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.LOAD_DATA, watchLoadData);
}
