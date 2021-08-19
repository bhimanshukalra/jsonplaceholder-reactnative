import * as actions from "./actions";

const initialState = {
  posts: [],
};

const postListreducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.postListSetAction:
      return { ...state, posts: action.posts };
  }
  return state;
};

export default postListreducer;
