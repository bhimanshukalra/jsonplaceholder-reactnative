import * as actions from "./actions";

const initialState = {
  comments: [],
};

const postDetailReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.commentsSetAction:
      return { ...state, comments: action.val };
  }
  return state;
};

export default postDetailReducer;
