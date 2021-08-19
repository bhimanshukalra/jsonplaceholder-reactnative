import { FlatList, SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as actionCreator from "./redux/actionCreators";
import { connect } from "react-redux";
import { styles } from "./Styles";

const PostList = ({ posts, getPostList }) => {
  useEffect(() => {
    getPostList();
  }, []);

  getItemView = ({ title, userId, user }) => (
    <View style={styles.itemView}>
      <Text style={styles.itemPrimaryChild}>{title}</Text>
      <Text style={styles.itemSecondaryChild}>- {user.username}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={posts}
        renderItem={({ item }) => getItemView(item)}
        style={styles.list}
      />
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
