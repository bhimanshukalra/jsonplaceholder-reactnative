import { FlatList, SafeAreaView, Text, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { styles } from "./Styles";
import * as actionCreator from "./redux/actionCreators";

const PostDetail = ({ posts, getCommentList }) => {
  useEffect(() => {
    // setTimeout(() => console.log("useEffect posts", posts[0]), 1000);
    getCommentList(posts);
  }, []);

  getItemView = (item) => (
    <View style={styles.itemView}>
      {/* <Text style={styles.itemText}>Username: {username}</Text>
      <Text style={styles.itemText}>Name: {name}</Text>
      <Text style={styles.itemText}>Email: {email}</Text>
      <Text style={styles.itemText}>Website: {website}</Text>
      <Text style={styles.itemText}>Company name: {company.name}</Text>
      <Text style={styles.itemText}>
        Company catch phrase: {company.catchPhrase}
      </Text> */}
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      {/* <Text>Hello {posts}</Text> */}
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
    getCommentList: (posts) => dispatch(actionCreator.getCommentList(posts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
