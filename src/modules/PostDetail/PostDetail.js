import { FlatList, SafeAreaView, Text, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { styles } from "./Styles";
import * as actionCreator from "./redux/actionCreators";
import { Loader } from "../../util/Loader";

const PostDetail = ({ post, comments, getCommentList }) => {
  useEffect(() => {
    getCommentList(post.id);
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

  getCommentsView = () => (
    <View>
      <Text style={styles.heading}>Comments:</Text>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={comments}
        renderItem={({ item }) => getItemView(item)}
        // style={styles.list}
      />
    </View>
  );
  getPostView = () => (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{post.title}</Text>
      <View>
        <Text style={[styles.itemText, styles.itemSecondaryChild]}>
          - {post.user.username}
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.parent}>
      {getPostView()}
      {comments.length == 0 ? <Loader /> : getCommentsView()}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  // console.log("state.postDetailReducer.comments", state.postDetailReducer);
  return {
    comments: state.postDetailReducer.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: (id) => dispatch(actionCreator.getCommentList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
