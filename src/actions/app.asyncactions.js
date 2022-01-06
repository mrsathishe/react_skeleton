import { takeEvery, put } from "@redux-saga/core/effects";
import { INCREMENT, LOAD_INCREMENT } from "./app.action";

/* const headers = () => {
    const token = '';
    return {
      'content-type': 'application/json',
      accept: 'application/json',
      'cache-control': 'no-store',
      pragma: 'no-cache',
      authorization: token ? `Bearer ${token}` : '',
    };
}; */

export function* increment(incrementValue) {
    yield put({ type: INCREMENT, value: ++(incrementValue.payload) })

    //if using connecting api.
    /* try {
        const endpoint = '';
        const response = yield call(fetch, endpoint, {
            headers: yield call(headers),
        });
        const data = yield response.json();
        if (data && !data.error) {
            yield put({ type: SUCCESS_REDUCER, data });
        } else {
            yield put({ type: SET_ERROR, data });
            // yield call(timeout, entity);
        }
    } catch (error) {
        yield put({ type: SET_ERROR, entity, error });
        // yield call(timeout, entity);
    } */
}

export default function* app() {
    yield takeEvery(LOAD_INCREMENT, increment);
}