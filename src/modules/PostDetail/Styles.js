import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  parent: {
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
    alignSelf: "flex-end",
  },
  itemText: {
    fontSize: 16,
  },
  heading: {
    fontWeight: "600",
  },
});
