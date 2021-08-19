import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
  itemView: {
    marginVertical: 10,
    borderBottomWidth: 0.5,
  },
  itemPrimaryChild: {
    flex: 8,
  },
  itemSecondaryChild: {
    flex: 2,
    alignSelf: "flex-end",
  },
});
