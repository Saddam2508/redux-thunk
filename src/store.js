import { applyMiddleware, createStore } from "redux";
import todosReducer from "./services/reducer/todosReducer";
import { thunk } from "redux-thunk"; // ✅ Updated import
import {
  getTodosFailed,
  getTodosRequest,
  getTodosSuccess,
} from "./services/actions/todosAction";
import axios from "axios";
import { API_URL } from "./services/constants/todosConstant";

// thunk action creator
export const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        dispatch(getTodosSuccess(todos));
      })
      .catch((error) => {
        dispatch(getTodosFailed(error.message));
      });
  };
};

const store = createStore(todosReducer, applyMiddleware(thunk));

// সাবস্ক্রাইব করার সময় 'subscribe' লিখবেন
store.subscribe(() => {
  console.log(store.getState());
});

// thunk অ্যাকশন ডিপ্যাচ করা
store.dispatch(fetchData());

export default store;
