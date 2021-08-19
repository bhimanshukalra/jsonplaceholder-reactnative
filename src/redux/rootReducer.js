import { combineReducers } from "redux";
import React from "react";
import postListreducer from "../modules/Posts/redux/PostListReducer";

const rootReducer = combineReducers({ postListreducer });

export default rootReducer;
