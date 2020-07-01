import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 45,
  },
  pointImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 32,
  },
  pointName: {
    color: colors.darkPurple,
    fontSize: 28,
    marginTop: 24,
  },
  pointItems: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: colors.gray2,
  },
  address: {
    marginTop: 32,
  },
  addressTitle: {
    color: colors.darkPurple,
    fontSize: 16,
  },
  addressContent: {
    lineHeight: 24,
    marginTop: 8,
    color: colors.gray,
  },
  footer: {
    borderTopWidth: 3,
    borderColor: colors.gray2,
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
    backgroundColor: colors.green,
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 8,
    color: colors.white,
  },
});
