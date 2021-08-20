import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as actionCreator from "./redux/actionCreators";
import { connect } from "react-redux";
import { styles } from "./Styles";
import UserList from "../UserList/UserList";
import { Loader } from "../../util/Loader";
import PostDetail from "../PostDetail/PostDetail";
import { Actions } from "react-native-router-flux";

const PostList = ({ posts, getPostList, navigation }) => {
  useEffect(() => {
    getPostList();
  }, []);

  const [showUserDetail, setShowUserDetail] = useState(false);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  getItemView = ({ title, userId, user }, index) => (
    <TouchableOpacity
      style={styles.itemView}
      onPress={() => Actions.postDetail({ post: posts[index] })}
    >
      <Text style={[styles.itemPrimaryChild, styles.itemText]}>{title}</Text>
      <TouchableOpacity
        onPress={() => Actions.user({ user: posts[index].user })}
      >
        <Text style={[styles.itemSecondaryChild, styles.itemText]}>
          - {user.username}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.parent}>
      {posts.length === 0 ? <Loader /> : null}
      {!showUserDetail && !showPostDetail ? (
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={posts}
          initialNumToRender={20}
          renderItem={({ item, index }) => getItemView(item, index)}
          style={styles.list}
        />
      ) : null}
      {showUserDetail ? <UserList user={posts[selectedIndex].user} /> : null}
      {showPostDetail ? <PostDetail post={posts[selectedIndex]} /> : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postListreducer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostList: () => dispatch(actionCreator.getPostList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
