import { all, takeEvery, call, put as dispatch } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    yield takeEvery('POST_VISITOR', postVisitor),
    yield takeEvery('FETCH_MEMBERS', getMember),
    yield takeEvery('FETCH_MEMBERSLIST', getMembersCheckedIn),
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
    type: 'error',
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
  }catch(err){
    console.log('Error', err);
  };

}


function* getMembersCheckedIn(action) {
  try{ 
    const response = yield call(axios.get, '/api/memb/checkedin')
    const responseAction = {type: 'SET_MEMBERLIST', payload: response.data}
    yield dispatch(responseAction)
    console.log(response);
  }catch(err){
    console.log('Error', err);
  };

}

function* postMember(action) {
  console.log(action.payload);
  try{ 
    yield call(axios.post, '/api/memb', action.payload)
    const response = getMembersCheckedIn()
    const responseAction = {type: 'SET_MEMBERLIST', payload: response.data}
    yield dispatch(responseAction)
    yield successPost();
  }catch(err){
    console.log('Error', err);
    failPost();
  };

}
