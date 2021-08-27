import { call, put, takeEvery } from "@redux-saga/core/effects";
import { FETCH_LIST, REQUEST_LIST } from "./action";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_LIST, sagaWorker);
}

function* sagaWorker() {
  try {
    const payload = yield call(fetchList);
    yield put({ type: FETCH_LIST, payload });
  } catch (e) {
    put(alert(`Error: ${e}`));
  }
}

async function fetchList() {
  const response = await fetch(
    "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e"
  );
  return response.json();
}
