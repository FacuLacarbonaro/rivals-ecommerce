import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";


function* productSaga() {
  try {
    const res = yield Axios.get(
      "https://rivals-ecommerce.herokuapp.com/products"
    );
    let data = res.data;
    yield put({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_FAIL", payload: { error } });
  }
}

function* watchProductSaga() {
  yield takeEvery("FETCH_PRODUCTS", productSaga);
}

export default watchProductSaga;
