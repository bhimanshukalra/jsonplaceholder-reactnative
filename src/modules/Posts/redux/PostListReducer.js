import * as actions from "./actions";

const initialState = {
  posts: [],
};

const postListreducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.postListSetAction:
      return getPostsAndUsers(state, action);
  }
  return state;
};

getPostsAndUsers = (state, { action }) => {
  const response = action.posts.map((post) => {
    // console.log("post", post.userId, action.users[post.userId - 1].id);
    return { ...post, user: action.users[post.userId - 1] };
  });

  return { ...state, posts: response };
};

export default postListreducer;
