import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 10,
  },
  itemView: {
    flexDirection: "row",
    borderWidth: 1,
  },
  itemPrimaryChild: {
    flex: 8,
  },
  itemSecondaryChild: {
    flex: 2,
  },
});
