import { call, put, select, takeLatest } from "redux-saga/effects";

import { Types } from "./organizaiton-item.constant";

import * as service from "services/organizations.service";

import { hideEditPopup, setSaving } from "./organizaiton-item.action";
import { updateOrganization } from "../organization-list/organization-list.action";
import { pushErrorMessage } from "store/modules/snackbar/snackbar.action";

function* watchSaveData({ payload: { organization } }: any) {
  try {
    yield put(setSaving(true));

    const { index } = yield select(
      (state: any) => state.organizations.organizationItem
    );

    if (organization.id) {
      yield call(service.updateOrganization, organization);
    } else {
      yield call(service.createOrganization, organization);
    }

    yield put(updateOrganization(index, organization));

    yield put(hideEditPopup());
  } catch (error) {
    yield put(pushErrorMessage(error));
    yield put(setSaving(false));
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.SAVE_ORGANIZATION, watchSaveData);
}
