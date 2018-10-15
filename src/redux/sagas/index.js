import { all, takeEvery, call, put as dispatch } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from 'axios';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    yield takeEvery('POST_VISITOR', postVisitor),
    yield takeEvery('FETCH_MEMBERS', getMember),
    yield takeEvery('POST_MEMBER', postMember)
    // watchIncrementAsync()
  ]);
}


function* postVisitor(action) {
  console.log(action.payload);
  try{ 
    yield call(axios.post, '/api/visi', action.payload)
  }catch(err){
    console.log('Error', err);
    
  };

}

function* getMember(action) {
  try{ 
    const response = yield call(axios.get, '/api/memb')
    console.log(response);
    // const result = yield call(axios.get, '/api/memb/list')
    // console.log(result);
    // const responseAction = {type: 'SET_MEMBERS', payload: result.data}
    // console.log(responseAction)
    // yield dispatch(responseAction)
  }catch(err){
    console.log('Error', err);
  };

}

function* postMember(action) {
  console.log(action.payload);
  try{ 
    yield call(axios.post, '/api/memb', action.payload)
  }catch(err){
    console.log('Error', err);
    
  };

}
