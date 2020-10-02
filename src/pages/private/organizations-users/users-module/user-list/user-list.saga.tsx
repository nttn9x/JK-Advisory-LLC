import { call, put, select, takeLatest } from "redux-saga/effects";

import { Types } from "./user-list.constant";

import { getAllUser } from "services/users.service";
import { setData, loadDone } from "./main/user-list.action";
import { pushErrorMessage } from "store/modules/snackbar/snackbar.action";

function* watchLoadData() {
  const {
    selectedOrganization: { organization },
  } = yield select((state: any) => state.organizations.organizationList);
  const { params } = yield select((state: any) => state.organizations.userList);
  try {
    let users = yield call(getAllUser, {
      search: params.keyword,
      organization_id: organization ? organization.id : null,
    });

    yield put(loadDone(users));
  } catch (error) {
    yield put(pushErrorMessage(error));
  }
}

function* watchChangePage() {
  const {
    userCaches,
    params: { page },
  } = yield select((state: any) => state.organizations.userList);

  const nextRangeItem = page * 30;

  const users = userCaches.slice(nextRangeItem - 30, nextRangeItem);

  yield put(setData(users));
}

export default function* rootSaga() {
  yield takeLatest(Types.LOAD_DATA, watchLoadData);
  yield takeLatest(Types.CHANGE_PAGE, watchChangePage);
}
