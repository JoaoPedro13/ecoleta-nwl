import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import dynamicStyle from "./styles";
import strings from "./strings";
import colors from "../../styles/colors";
import PropTypes from "prop-types";

const Component = ({ size, colorText, colorIcon }) => {
  const styles = dynamicStyle(size, colorText);

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faRecycle} color={colorIcon} size={size + 10} />
      <Text style={styles.text}>{strings.name}</Text>
    </View>
  );
};

Component.propTypes = {
  size: PropTypes.number,
  colorText: PropTypes.string,
  colorIcon: PropTypes.string,
};
Component.defaultProps = {
  size: 30,
  colorText: colors.darkPurple,
  colorIcon: colors.dullGreen,
};

export default Component;
