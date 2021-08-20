import { combineReducers } from "redux";
import React from "react";
import postListreducer from "../modules/Posts/redux/PostListReducer";
import postDetailreducer from "../modules/PostDetail//redux/PostDetailReducer";

const rootReducer = combineReducers({ postListreducer, postDetailreducer });

export default rootReducer;
