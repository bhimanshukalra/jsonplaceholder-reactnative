import { httpPost } from "../../../util/RestClient";
import * as actions from "./actions";
import * as Endponts from "../../../util/Endpoints";

export const getPostList = () => {
  return (dispatch) => {
    dispatch(toggleLoading());
    httpPost(Endponts.posts).then((posts) => {
      httpPost(Endponts.users).then((users) => {
        dispatch(setPostList({ posts, users }));
      });
    });
  };
};

export const setPostList = (action) => {
  return { type: actions.postListSetAction, action: action };
};

export const toggleLoading = () => {
  return { type: actions.postListLoadingAction };
};
