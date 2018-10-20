import { all, takeEvery, call,
  //  put as dispatch 
  } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    yield takeEvery('POST_VISITOR', postVisitor),
    yield takeEvery('FETCH_MEMBERS', getMember),
    yield takeEvery('POST_MEMBER', postMember),
    yield takeEvery('ADD_MAILCHIMP', addMailchimp),
    // watchIncrementAsync()
  ]);
}
const toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000
});
const successPost = ()=>{
  toast.fire({
    type: 'success',
    title: 'Signed in successfully',
  })
}
const failPost = () => {
  toast.fire({
    type: 'warning',
    title: 'Sign in unsuccessful',
    text:'Did you select your reason for visiting?'
  })
}

function* postVisitor(action) {
  console.log(action.payload);
  try{ 
    yield call(axios.post, '/api/visi', action.payload)
    yield successPost();
  }catch(err){
    console.log('Error', err);
    failPost();
  };

}

function* addMailchimp(action) {
  console.log(action.payload);
  try{ 
    yield call(axios.post, '/api/mailChimp/addVisitor', action.payload)
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
