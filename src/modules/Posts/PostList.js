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

const PostList = ({ posts, getPostList, navigation }) => {
  useEffect(() => {
    getPostList();
  }, []);

  const [showUserDetail, setShowUserDetail] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  getItemView = ({ title, userId, user }, index) => (
    <View style={styles.itemView}>
      <Text style={[styles.itemPrimaryChild, styles.itemText]}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          setShowUserDetail(!showUserDetail);
          setSelectedIndex(index);
        }}
      >
        <Text style={[styles.itemSecondaryChild, styles.itemText]}>
          - {user.username}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      {!showUserDetail ? (
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={posts}
          renderItem={({ item, index }) => getItemView(item, index)}
          style={styles.list}
        />
      ) : null}
      {showUserDetail ? <UserList user={posts[selectedIndex].user} /> : null}
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
