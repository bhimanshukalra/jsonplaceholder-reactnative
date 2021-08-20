import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PostDetail from "./src/modules/PostDetail/PostDetail";
import PostList from "./src/modules/Posts/PostList";
import UserList from "./src/modules/UserList/UserList";

export default function App() {
  // return <PostDetail />;
  // return <UserList />;
  return <PostList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
