import * as actions from "./actions";

const initialState = {
  comments: [],
};

const postDetailreducer = (state = initialState, action) => {
  //   console.log("action", action);
  switch (action.type) {
    case actions.commentsSetAction:
      return getPostsAndComments(state, action);
  }
  return state;
};

getPostsAndComments = (state, { action }) => {
  // posts, comments
  //   console.log("act", action.comments.length);
  //   console.log("act2", { ...action, comments: [] });
  const response = action.posts.map((post) => {
    // console.log("post", post.userId, action.users[post.userId - 1].id);
    return { ...post, user: action.users[post.userId - 1] };
  });

  return { ...state, comments: response };
};

export default postDetailreducer;
