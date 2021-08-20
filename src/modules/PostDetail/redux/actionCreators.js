import { httpPost } from "../../../util/RestClient";
import * as actions from "./actions";
import * as Endponts from "../../../util/Endpoints";

export const getCommentList = (posts) => {
  // console.log("getCommentList posts", posts);
  return (dispatch) => {
    // dispatch(toggleLoading());
    httpPost(Endponts.comments).then((comments) => {
      dispatch(setCommentList({ posts, comments }));
    });
  };
};

export const setCommentList = (action) => {
  // console.log("action.posts", action.posts);
  return { type: actions.commentsSetAction, action };
};

export const toggleLoading = () => {
  return { type: actions.postListLoadingAction };
};
