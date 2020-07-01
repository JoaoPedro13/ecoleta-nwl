import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import colors from "../../styles/colors";

const Component = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} color={colors.green} />
    </TouchableOpacity>
  );
};

export default Component;
