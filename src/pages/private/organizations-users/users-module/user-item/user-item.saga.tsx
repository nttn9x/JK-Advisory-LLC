import { call, put, takeLatest } from "redux-saga/effects";

import { Types } from "./user-item.constant";

import { hideEditPopup, setSaving } from "./user-item.action";
import { pushErrorMessage } from "store/modules/snackbar/snackbar.action";
import * as userService from "services/users.service";
import { updateUser } from "../user-list/main/user-list.action";

function* watchSaveData({ payload: { user } }: any) {
  try {
    yield put(setSaving(true));

    if (!user.id) {
      yield call(userService.saveUser, user);
    } else {
      yield call(userService.updateUser, user);
    }

    yield put(updateUser(user));

    yield put(hideEditPopup());
  } catch (error) {
    yield put(pushErrorMessage(error));
    yield put(setSaving(false));
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.SAVE_USER, watchSaveData);
}
