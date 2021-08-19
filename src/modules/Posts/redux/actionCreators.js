import { httpPost } from "../../../util/RestClient";
import * as actions from "./actions";
import * as Endponts from "../../../util/Endpoints";

export const getPostList = () => {
  return (dispatch) => {
    dispatch(toggleLoading());
    httpPost(Endponts.posts).then((res) => dispatch(setPostList(res)));
  };
};

export const setPostList = (action) => {
  return { type: actions.postListSetAction, posts: action };
};

export const toggleLoading = () => {
  return { type: actions.postListLoadingAction };
};
