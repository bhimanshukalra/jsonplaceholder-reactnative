import { httpPost } from "../../../util/RestClient";
import * as actions from "./actions";
import * as Endponts from "../../../util/Endpoints";

export const getCommentList = (id) => {

  return (dispatch) => {
    // dispatch(toggleLoading());
    httpPost(Endponts.comments(id)).then((comments) => {
      dispatch(setCommentList({ comments }));
    });
  };
};

export const setCommentList = (action) => {
  return { type: actions.commentsSetAction, val: action.comments };
};

export const toggleLoading = () => {
  return { type: actions.postListLoadingAction };
};
