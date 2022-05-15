import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
    withCredentials: true
}
export const initialState = {
    isWritten: false
}

const WRITE_REQUEST = 'board/WRITE_REQUEST';
const WRITE_SUCCESS = 'board/WRITE_SUCCESS';
const WRITE_FAILURE = 'board/WRITE_FAILURE';

export const writeRequest = createAction(WRITE_REQUEST, data => data)
// export const registerRequest = data => (
//     {type: REGISTER_REQUEST, payload: data}
// )

export function* writeSaga() {
    yield takeLatest(WRITE_REQUEST, add);
}

function* add(action) {
    try {
        const response = yield call(writeAPI, action.payload)
        console.log(" 게시글등록 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: WRITE_SUCCESS, payload: response.data})
        yield put(window.location.href = "/board/list")
    } catch (error) {
        yield put({type: WRITE_FAILURE, payload: error.message})
    }
}
const writeAPI = payload => axios.post(`${SERVER}/board/write`, payload, {headers})

const write = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state, 
        ...action.payload
    })
    }, initialState)
export default write


