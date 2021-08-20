import { StyleSheet } from "react-native";
import { primaryBg } from "../../util/Colors";

export const styles = StyleSheet.create({
  parent: {
    paddingTop: 20,
    alignItems: "center",
    flex: 1,
    backgroundColor: primaryBg,
  },
  itemView: {
    marginVertical: 10,
    flex: 1,
  },
  itemChild: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  itemPrimaryChild: {
    flex: 8,
  },
  itemSecondaryChild: {
    alignItems: "flex-start",
    flex: 2,
  },
  itemText: {
    fontSize: 16,
  },
});
