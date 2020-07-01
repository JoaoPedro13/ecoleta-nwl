import { StyleSheet } from "react-native";

const dynamicStyle = (size, colorText) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      marginLeft: 10,
      paddingBottom: 15,
      fontSize: size,
      fontWeight: "bold",
      color: colorText,
    },
  });
};

export default dynamicStyle;
