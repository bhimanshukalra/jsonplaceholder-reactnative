import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  parent: {
    marginTop: 20,
    alignItems: "center",
  },
  itemView: {
    marginVertical: 10,
  },
  itemPrimaryChild: {
    flex: 8,
  },
  itemSecondaryChild: {
    flex: 2,
    alignSelf: "flex-end",
  },
  itemText: {
    fontSize: 16,
  },
});
