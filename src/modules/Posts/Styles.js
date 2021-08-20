import { StyleSheet } from "react-native";
import { primaryBg } from "../../util/Colors";

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: primaryBg,
  },
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
  itemText: {
    fontSize: 16,
  },
});
