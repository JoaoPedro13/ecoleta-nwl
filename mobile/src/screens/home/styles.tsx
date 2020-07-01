import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 42,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    marginBottom: 40,
  },
  title: {
    color: colors.purple,
    fontWeight: "bold",
    fontSize: 32,
    maxWidth: 270,
  },
  description: {
    fontWeight: "bold",
    maxWidth: 270,
    color: colors.gray,
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
  },
  footer: {},
  button: {
    backgroundColor: colors.green,
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: colors.transparentBlack,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
  },
});
