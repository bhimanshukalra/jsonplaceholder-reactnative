import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions, Router, Scene, Stack } from "react-native-router-flux";
import PostDetail from "./src/modules/PostDetail/PostDetail";
import PostList from "./src/modules/Posts/PostList";
import UserList from "./src/modules/UserList/UserList";
import { navigationBarBg } from "./src/util/Colors";

export default function App() {
  return (
    <Router>
      <Stack
        key="rootStack"
        navigationBarStyle={{ backgroundColor: navigationBarBg }}
      >
        <Scene
          key="posts"
          initial
          component={PostList}
          title="Posts"
          headerMode="none"
        />
        <Scene
          key="user"
          component={UserList}
          title="User"
          renderLeftButton={
            // <Icon name="chevron-left" size={30} onPress={() => Actions.pop()} />
            <Text onPress={() => Actions.pop()}>Back</Text>
          }
        />
        <Scene
          key="postDetail"
          component={PostDetail}
          title="Post"
          renderLeftButton={<Text onPress={() => Actions.pop()}>Back</Text>}
        />
      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
