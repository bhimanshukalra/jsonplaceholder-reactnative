import { StyleSheet } from "react-native";
import { primaryBg } from "../../util/Colors";

export const styles = StyleSheet.create({
  parent: {
    paddingHorizontal: 20,
    backgroundColor: primaryBg,
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
